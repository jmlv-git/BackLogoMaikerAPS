-- CreateTable
CREATE TABLE "RepositorioLogo" (
    "idLogo" TEXT NOT NULL PRIMARY KEY,
    "imagem" TEXT NOT NULL,
    "loginCliente" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RepositorioProjeto" (
    "idProjeto" TEXT NOT NULL PRIMARY KEY,
    "loginCliente" TEXT NOT NULL,
    "loginDesigner" TEXT NOT NULL,
    "idLogo" TEXT NOT NULL,
    "msgAlteracao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataSolicitacao" TEXT NOT NULL,
    "dataConclusao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RepositorioAcesso" (
    "login" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL
);
