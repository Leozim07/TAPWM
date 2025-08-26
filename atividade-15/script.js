const cursoSelect = document.getElementById('cursoSelect');

        const cursos = {
            ads: {
                nome: "Análise e Desenvolvimento de Sistemas",
                descricao: "Curso focado em desenvolvimento de software, banco de dados e programação."
            },
            fm: {
                nome: "Fabricação Mecânica",
                descricao: "Curso voltado para processos de fabricação, controle de qualidade e automação."
            },
            log: {
                nome: "Logística",
                descricao: "Curso sobre cadeias de suprimentos, transporte, armazenamento e distribuição."
            },
            gpi: {
                nome: "Gestão da Produção Industrial",
                descricao: "Curso que trata da gestão de processos industriais e melhoria contínua."
            },
            pol: {
                nome: "Polímeros",
                descricao: "Curso especializado em materiais poliméricos e suas aplicações industriais."
            },
            projetos: {
                nome: "Projetos Mecânicos",
                descricao: "Curso que prepara profissionais para desenvolver projetos na área de mecânica."
            },
            gestaoTI: {
                nome: "Gestão da Tecnologia da Informação",
                descricao: "Curso voltado para gerenciamento de recursos de TI e infraestrutura."
            }
        };

        cursoSelect.onchange = function() {
            const valorSelecionado = this.value;

            if (valorSelecionado) {
                const curso = cursos[valorSelecionado];

                const confirmar = confirm(`Deseja abrir informações sobre o curso "${curso.nome}"?`);

                if (confirmar) {
                    const novaJanela = window.open("", "_blank", "width=600,height=300");

                    novaJanela.document.write(`
                        <html>
                            <head>
                                <title>${curso.nome}</title>
                                <style>
                                    body {
                                        font-family: Arial, sans-serif;
                                        padding: 20px;
                                        background-color: #eef2f3;
                                    }
                                    h2 {
                                        color: #2c3e50;
                                    }
                                    p {
                                        font-size: 16px;
                                    }
                                </style>
                            </head>
                            <body>
                                <h2>${curso.nome}</h2>
                                <p>${curso.descricao}</p>
                            </body>
                        </html>
                    `);
                }

                // Redefine para o valor padrão após a ação
                this.value = "";
            }
        };