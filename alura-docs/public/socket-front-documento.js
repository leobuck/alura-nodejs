import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
}

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };