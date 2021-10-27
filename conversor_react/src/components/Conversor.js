import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conversor.css';

export default class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter() {
        //http://economia.awesomeapi.com.br/json/last/USD-BRL
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-api-key-6Jb095NFUxtI5hl3VBxzD&q=${de_para}&compact=y`;

        fetch(url).then(res => {
            return res.json();
        }).then(json => {
            let cotacao = json[de_para].val;
            let moedaB_valor = (parseFloat(this.state. moedaA_valor) * cotacao).toFixed(2);
            this.setState({moedaB_valor});
        }) 
    }

    render() {
        return (
            <div className="conversor">
                <h2 className="espacamentoBaixo">{this.props.moedaA} para {this.props.moedaB}</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control col-md-3" 
                        onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}
                        placeholder="Digite aqui o valor">
                    </input>
                </div>
                <input type="button" value="Converter" className="btn btn-success col-md-9" onClick={this.converter}></input>
                <h2 className="espacamentoCima">$ {this.state.moedaB_valor}</h2>
            </div>
        );
    }
}