import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Marques', 10000, 111111111111);
diretor.cadastrarSenha('1234');
const gerente = new Gerente('Silva', 5000, 222222222222);

console.log(SistemaAutenticacao.login(diretor, '1234'));