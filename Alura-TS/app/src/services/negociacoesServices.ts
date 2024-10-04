import { NegociacaoDia } from "../interfaces/negociacaoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoDia[]) => {
        return dados.map((dadosDeHoje) => {
          return new Negociacao(
            new Date(),
            dadosDeHoje.vezes,
            dadosDeHoje.montante
          );
        });
      });
  }
}
