import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';


import './contact.scss'


const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 350,
        fontSize: '60px'

    },
    resize: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'normal'
    },
    button: {
        margin: theme.spacing.unit,
    },


});
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            body: '',
            error: false,
            sended: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    verifyEmail() {
        const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = !rex.test(String(this.state.email).toLowerCase());
        this.setState({ error });
        return !error;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSendMail() {
        if( this.verifyEmail()) {
            console.log('email ok', this.state.error) 
            this.setState({
                sended: true,
            })
        } else{
            console.log('email inválido', this.state.error);

        }


    }

    render() {
        const { classes } = this.props;
        return (
            <section id='contact'>


                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-8 col-lg-offset-2'>
                            <h1 className='contact-title'> Contato </h1>

                        </div>
                        <div className='col-lg-4 col-lg-offset-4'>
                            <form>
                                <TextField
                                    id="email"
                                    label="E-mail"
                                    className={classes.textField}
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    InputProps={{
                                        classes: {
                                            input: classes.resize,
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 17,
                                            color: '#484848',
                                        }
                                    }}>
                                </TextField>


                                <TextField
                                    id="body"
                                    label="Fale comigo ;]"
                                    className={classes.textField}
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                    multiline
                                    rows="4"
                                    margin="normal"
                                    InputProps={{
                                        classes: {
                                            input: classes.resize,
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 17,
                                            color: '#484848',
                                        }
                                    }}>
                                </TextField>
                                {/* <input
                                    required
                                    type="email"
                                    className="form-control contact-email"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}>
                                </input>
                                <textarea
                                    required
                                    className="form-control contact-body"
                                    id="body"
                                    rows="5"
                                    placeholder="Fale comigo ;)"
                                    value={this.state.body}
                                    onChange={this.handleChange}>
                                </textarea> */}
                                <Button
                                    onClick={() => this.handleSendMail()}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}>
                                    Enviar
                                    <Icon className={classes.rightIcon}></Icon>
                                </Button>
                                {this.state.error && (
                                    <div>
                                        <a className="glyphicon-criar-conta glyphicon glyphicon-remove x-icon" />
                                        <small
                                            style={{
                                                fontFamily: 'Arial',
                                                color: 'white',
                                                paddingLeft: '3%',
                                                fontWeight: 'normal',
                                                

                                            }}
                                            id="emailHelp"
                                            className="form-text text-muted">
                                            E-mail inválido!
                                            </small>
                                    </div>
                                )}
                                {this.state.sended && (
                                    <div>
                                        <a className="glyphicon-criar-conta glyphicon  glyphicon-ok x-icon" />
                                        <small
                                            style={{
                                                fontFamily: 'Arial',
                                                color: 'white',
                                                paddingLeft: '3%',
                                                fontWeight: 'normal',
                                                

                                            }}
                                            id="emailHelp"
                                            className="form-text text-muted">
                                            E-mail enviado!
                                            </small>
                                    </div>
                                )}


                            </form>

                        </div>

                    </div>

                </div>


            </section>
        )
    }
}
export default withStyles(styles)(Contact);