import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

io.use(autorizarUsuario);

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
