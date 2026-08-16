import type {
  StepItem,
  BusinessTypeItem,
  BenefitItem,
  UpdatePanelItem,
  ChatMessage
} from "../types/landing";

export const stepsData: StepItem[] = [
  {
    number: "Passo 1",
    title: "Mapeamento do Negócio",
    description: "Juntamos as informações do seu dia a dia, como cardápio, tabela de preços, horários e as dúvidas mais comuns dos seus clientes."
  },
  {
    number: "Passo 2",
    title: "Treinamento da Inteligência",
    description: "Configuramos o assistente com a cara da sua empresa, garantindo respostas rápidas, educadas e naturais no WhatsApp."
  },
  {
    number: "Passo 3",
    title: "Pronto para Atender",
    description: "O assistente assume o primeiro contato 24 horas por dia, tirando dúvidas, organizando pedidos e encaminhando tudo pronto para você."
  }
];

export const businessTypesData: BusinessTypeItem[] = [
  {
    id: "barbershop",
    title: "Barbearia",
    description: "Agende horários, responda dúvidas sobre serviços e informe valores.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.6 7.4 19 17M6.6 16.6 19 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "pizzeria",
    title: "Pizzaria",
    description: "Apresente cardápio, preços, promoções e receba pedidos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3 3 9l9 5 9-5-9-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 9v6l9 5 9-5V9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "burger",
    title: "Hamburgueria",
    description: "Mostre o cardápio, tire dúvidas e receba pedidos pelo WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 11h16a1 1 0 0 1 1 1c0 3.5-3 7-9 7s-9-3.5-9-7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 11c0-3 3-5 7-5s7 2 7 5M3 15h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "aesthetics",
    title: "Estética",
    description: "Informe procedimentos, horários, valores e responda dúvidas frequentes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    id: "salon",
    title: "Salões",
    description: "Organize agendamentos e informe serviços, horários e valores.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 3v4M18 3v4M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 11h16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "Responda pedidos, informe prazos e mantenha o cliente atualizado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 8h13l3 4v6h-2M3 8v10h2M16 8V5H3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="7.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
];

export const featuresData: string[] = [
  "Responder clientes no WhatsApp",
  "Informar preços",
  "Mostrar cardápio",
  "Informar horários de funcionamento",
  "Responder dúvidas frequentes",
  "Informar promoções",
  "Ajudar com agendamentos",
  "Orientar sobre produtos e serviços",
  "Consultar informações atualizadas"
];

export const updatePanelData: UpdatePanelItem[] = [
  {
    title: "Pizza Margherita",
    detail: "R$ 45,00",
    statusText: "atualizado",
    isPending: false
  },
  {
    title: "Horário de sábado",
    detail: "até 22h",
    statusText: "atualizado",
    isPending: false
  },
  {
    title: "Combo em dupla",
    detail: "promoção",
    statusText: "em revisão",
    isPending: true
  }
];

export const benefitsData: BenefitItem[] = [
  {
    title: "Personalizado",
    description: "O agente é configurado para o seu negócio."
  },
  {
    title: "Simples",
    description: "Sem plataformas complicadas para você aprender."
  },
  {
    title: "WhatsApp",
    description: "Seu cliente continua falando pelo canal que já conhece."
  },
  {
    title: "Acompanhamento",
    description: "Eu acompanho a solução e faço ajustes quando necessário."
  }
];

export const chatMessagesData: ChatMessage[] = [
  {
    id: "msg-1",
    type: "in",
    text: "Oi! Vocês têm horário hoje à tarde pra corte + barba?"
  },
  {
    id: "msg-2",
    type: "out",
    text: "Oi! Tenho sim 😊 Às 15h30 ou 17h ficam livres. Qual prefere?"
  },
  {
    id: "msg-3",
    type: "in",
    text: "15h30 tá ótimo, pode marcar"
  },
  {
    id: "msg-4",
    type: "out",
    text: "Perfeito! Horário marcado para hoje às 15h30. Te esperamos! 💈"
  }
];
