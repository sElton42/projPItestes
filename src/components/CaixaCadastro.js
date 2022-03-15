import React from 'react';
import './CaixaCadastro.css';

function CaixaCadastro() {
  return (
    <div className='caixacadastro'>
        <div className='caixacadastro-container'>

            <div className='caixacadastro-conteudo'>
                <div className='caixacadastro-title'>
                    <p className='caixacadastro-title-p'>Faça Seu Cadastro</p>
                </div>

                <div className='caixacadastro-hero'>
                    <div className='caixacadastro-nome'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-nome-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Nome Completo:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='name'
                                    type='text'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-usuario-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Nome de Usuário:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='username'
                                    type='text'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-email-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>E-mail UFU:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='email'
                                    type='email'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-senha-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Senha:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='psw'
                                    type='password'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-senha-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Repita a Senha:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='psw'
                                    type='password'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-selectbox'>

                        <label class="container">
                            <p className='container-p'>Sou Aluno(a)</p>
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <p className='container-p'>Sou Professor(a)</p>
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <p className='container-p'>Outro</p>
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <div className='caixacadastro-butlogin-container'>
                        <div className='caixacadastro-butlogin-rect'>
                            <p className='caixacadastro-butlogin-p'>Cadastrar</p>
                        </div>
                    </div>

                    <div className='caixacadastro-infofaltantes'>
                        <p className='caixacadastro-infofaltantes-p'>Mensagem de erro.</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CaixaCadastro