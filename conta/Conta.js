//Classe abstrata
export class Conta{
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta)
      throw new Error("Você não deveria instanciar um objeto do tipo Conta");
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //Metodo abstrato
  sacar(valor) {
    throw new Error('O método sacar da conta é abstrato');
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}