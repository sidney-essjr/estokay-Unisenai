import { useState } from "react";
import CheckIcon from "../../../../assets/svg/CheckIcon";
import Subtitle from "../../../_atoms/text/home/Subtitle";
import Title from "../../../_atoms/text/home/Title";
import UserRegistrationForm from "../../../_molecules/forms/user-registration/UserRegistrationForm";
import Alert from "../../../helper/feedback/Alert";
import Modal from "../../modal/Modal";
import styles from "./userRegistration.module.css";

export default function UserRegistration() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  return (
    <section className={styles.container}>
      <Title>Criar Conta Voluntário</Title>
      <UserRegistrationForm
        openModal={handleOpenModal}
        openAlert={handleOpenAlert}
      />
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Termos de uso do sistema EstOkay."
      >
        {
          <>
            <Subtitle> 1. Introdução</Subtitle>
            <p>
              Estes Termos de Uso (os "Termos") regem o seu acesso e uso do
              sistema de gerenciamento de doações baseado na web (o "Sistema")
              fornecido pela [Nome da Instituição] (a "Instituição"). O Sistema
              permite que os usuários façam doações à Instituição, gerenciem seu
              histórico de doações e acompanhem o impacto de suas doações.
            </p>
            <Subtitle>2. Aceitação dos Termos</Subtitle>
            <p>
              Ao acessar ou usar o Sistema, você concorda em ficar vinculado a
              estes Termos. Se você não concordar com estes Termos, você não
              poderá acessar ou usar o Sistema.
            </p>
            <Subtitle>3. Registro de usuário</Subtitle>
            <p>
              Para usar determinados recursos do Sistema, pode ser necessário
              registrar uma conta. Ao se registrar, você concorda em fornecer
              informações precisas e completas sobre você. Você é responsável
              por manter a confidencialidade da senha da sua conta e por todas
              as atividades que ocorrem na sua conta. Você concorda em notificar
              a Instituição imediatamente sobre qualquer uso não autorizado de
              sua conta.
            </p>
            <Subtitle>4. Doações</Subtitle>
            <p>
              Ao fazer uma doação através do Sistema, você concorda com o
              seguinte: Você é o proprietário autorizado dos fundos que está
              doando. Sua doação é voluntária e você entende que não receberá
              nenhum bem ou serviço em troca de sua doação. A Instituição poderá
              utilizar sua doação para qualquer um de seus fins beneficentes,
              conforme julgar a seu exclusivo critério. A Instituição pode
              compartilhar suas informações de doação com prestadores de
              serviços terceirizados que auxiliam a Instituição no processamento
              de doações.
            </p>
            <Subtitle>5. Política de Privacidade</Subtitle>
            <p>
              A Política de Privacidade da Instituição (a “Política de
              Privacidade”) é incorporada a estes Termos por referência. A
              Política de Privacidade explica como a Instituição coleta, utiliza
              e divulga suas informações pessoais. Você pode revisar a Política
              de Privacidade em [URL da Política de Privacidade].
            </p>
            <Subtitle>6. Propriedade Intelectual</Subtitle>
            <p>
              O Sistema e todo o conteúdo e materiais incluídos no Sistema (o
              “Conteúdo”) são de propriedade exclusiva da Instituição ou de seus
              licenciadores. Você não pode usar, copiar, reproduzir, modificar,
              distribuir, exibir, executar ou criar trabalhos derivados do
              Conteúdo sem o consentimento prévio por escrito da Instituição.
            </p>
            <Subtitle>7. Isenção de Garantias</Subtitle>
            <p>
              O SISTEMA E O CONTEÚDO SÃO FORNECIDOS "COMO ESTÃO" E SEM QUAISQUER
              GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO,
              MAS NÃO SE LIMITANDO ÀS GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO,
              ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. A INSTITUIÇÃO NÃO
              GARANTE QUE O SISTEMA SERÁ ININTERRUPTO OU LIVRE DE ERROS.
            </p>
            <Subtitle>8. Limitação de Responsabilidade</Subtitle>
            <p>
              EM HIPÓTESE ALGUMA A INSTITUIÇÃO SERÁ RESPONSÁVEL POR QUAISQUER
              DANOS DE QUALQUER TIPO, INCLUINDO, MAS NÃO SE LIMITANDO A, DANOS
              DIRETOS, INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU
              EXEMPLARES, DECORRENTES DE OU RELACIONADOS AO USO DO SISTEMA OU
              CONTEÚDO, MESMO QUE A INSTITUIÇÃO FOI AVISADA DA POSSIBILIDADE DE
              TAIS DANOS.
            </p>
            <Subtitle>9. Indenização</Subtitle>
            <p>
              Você concorda em indenizar, defender e isentar a Instituição, seus
              executivos, diretores, funcionários, agentes e afiliados de e
              contra todas e quaisquer reivindicações, responsabilidades, danos,
              perdas, custos, despesas e honorários (incluindo honorários
              advocatícios razoáveis ) decorrentes ou relacionados ao uso do
              Sistema ou à violação destes Termos.
            </p>
            <Subtitle>10. Rescisão</Subtitle>
            <p>
              A Instituição poderá encerrar seu acesso ao Sistema a qualquer
              momento, por qualquer motivo, com ou sem aviso prévio. Após a
              rescisão, você deverá cessar todo uso do Sistema e qualquer
              Conteúdo obtido do Sistema. 11. Lei Aplicável Estes Termos serão
              regidos e interpretados de acordo com as leis do Estado de [Nome
              do Estado], independentemente de seus conflitos de princípios
              legais.
            </p>
            <Subtitle>12. Acordo Integral</Subtitle>
            <p>
              Estes Termos constituem o acordo integral entre você e a
              Instituição com relação ao Sistema e substituem todas as
              comunicações, representações ou acordos anteriores ou
              contemporâneos, sejam orais ou escritos.
            </p>
            <Subtitle>13. Renúncia</Subtitle>
            <p>
              Nenhuma renúncia a qualquer disposição destes Termos será efetiva
              a menos que seja feita por escrito e assinada por ambas as partes.
            </p>
            <Subtitle>14. Divisibilidade</Subtitle>
            <p>
              Se qualquer disposição destes Termos for considerada inválida ou
              inexequível, tal disposição será eliminada destes Termos e as
              disposições restantes permanecerão em pleno vigor e efeito.
            </p>
            <Subtitle>15. Avisos</Subtitle>
            <p>
              Todas as notificações e outras comunicações aqui previstas deverão
              ser feitas por escrito e serão consideradas devidamente entregues
              quando entregues pessoalmente, no primeiro dia útil após o
              depósito no correio dos Estados Unidos, postagem pré-paga,
              certificada ou registrada, aviso de recebimento solicitado,
              endereçado como segue:
            </p>

            <p>
              <b>[Nome da Instituição]</b>
            </p>
            <p>
              <b>[Endereço da Instituição]</b>
            </p>
          </>
        }
      </Modal>
      <Alert
        icon={<CheckIcon />}
        isOpen={showAlert}
        onClose={handleCloseAlert}
        time={3000}
        log="Voluntário cadastrado com sucesso!"
      />
    </section>
  );
}
