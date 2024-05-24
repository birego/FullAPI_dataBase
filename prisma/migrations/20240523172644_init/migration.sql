-- CreateTable
CREATE TABLE "Ordinateur" (
    "Tag" TEXT NOT NULL,
    "fabriquant" TEXT NOT NULL,
    "Modele" TEXT NOT NULL,

    CONSTRAINT "Ordinateur_pkey" PRIMARY KEY ("Tag")
);

-- CreateTable
CREATE TABLE "Apprenant" (
    "id" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT,
    "Date de Naissance" TIMESTAMP(3),
    "adress" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "ordinateurId" TEXT NOT NULL,

    CONSTRAINT "Apprenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cohorte" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idApprenat" TEXT NOT NULL,

    CONSTRAINT "Cohorte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL,
    "annee" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "idCohorte" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" TEXT NOT NULL,
    "Nom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "idCohorte" TEXT NOT NULL,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Apprenant" ADD CONSTRAINT "Apprenant_ordinateurId_fkey" FOREIGN KEY ("ordinateurId") REFERENCES "Ordinateur"("Tag") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cohorte" ADD CONSTRAINT "Cohorte_idApprenat_fkey" FOREIGN KEY ("idApprenat") REFERENCES "Apprenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_idCohorte_fkey" FOREIGN KEY ("idCohorte") REFERENCES "Cohorte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_idCohorte_fkey" FOREIGN KEY ("idCohorte") REFERENCES "Cohorte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
