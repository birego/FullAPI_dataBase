-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "ville" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cohorte" (
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,

    CONSTRAINT "cohorte_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "ordinateur" (
    "tag" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "fabricant" TEXT NOT NULL,

    CONSTRAINT "ordinateur_pkey" PRIMARY KEY ("tag")
);

-- CreateTable
CREATE TABLE "apprenant" (
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "postnom" TEXT,
    "date_de_naissance" TEXT NOT NULL,
    "lieu_de_naissance" TEXT NOT NULL,
    "code_cohorte" TEXT,
    "tag_ordinateur" TEXT,

    CONSTRAINT "apprenant_pkey" PRIMARY KEY ("matricule")
);

-- CreateTable
CREATE TABLE "coach" (
    "matricule" TEXT NOT NULL,
    "code_cohorte" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "postnom" TEXT,
    "date_de_naissance" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "coach_pkey" PRIMARY KEY ("matricule")
);

-- AddForeignKey
ALTER TABLE "cohorte" ADD CONSTRAINT "cohorte_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apprenant" ADD CONSTRAINT "apprenant_code_cohorte_fkey" FOREIGN KEY ("code_cohorte") REFERENCES "cohorte"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apprenant" ADD CONSTRAINT "apprenant_tag_ordinateur_fkey" FOREIGN KEY ("tag_ordinateur") REFERENCES "ordinateur"("tag") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coach" ADD CONSTRAINT "coach_code_cohorte_fkey" FOREIGN KEY ("code_cohorte") REFERENCES "cohorte"("code") ON DELETE CASCADE ON UPDATE CASCADE;
