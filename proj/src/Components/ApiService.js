const ip = '192.168.15.5'; // ip da máquina
const port = '8080'; // port vide a api de comunicacao

export const listaPersonagens = async () => {
  try {
   const response = await fetch(`http://${ip}:${port}/personagens`, {
     method: 'GET',
   });

   if (!response.ok) {
     throw new Error('Erro na solicitação: ' + response.status);
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Erro na solicitação:', error);
   throw error;
 }
};

export const apagarPersonagem = async (id) => {
  try {
   const response = await fetch(`http://${ip}:${port}/personagens/${id}`, {
     method: 'DELETE',
   });

   if (!response.ok) {
     throw new Error('Erro na solicitação: ' + response.status);
   }
   return true;
 } catch (error) {
   console.error('Erro na solicitação:', error);
   throw error;
 }
};

export const criarPersonagem = async (nome, raca, classe) => {
  try {
    const response = await fetch(`http://${ip}:${port}/gpt/personagem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        raca: raca,
        classe: classe,
      }),
    });

   if (!response.ok) {
     throw new Error('Erro na solicitação: ' + response.status);
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Erro na solicitação:', error);
   throw error;
 }
};

// Organiza o envio de mensagem a API
export const enviarMensagemAPI = async (mensagem) => {
   try {
    const response = await fetch(`http://${ip}:${port}/gpt/prompt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: mensagem,
        maxTokens: 100,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};

// Cadastro de usuario
export const cadastrarUsuario = async (email, senha) => {
  try {
   const response = await fetch(`http://${ip}:${port}/usuarios`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: email,
       senha: senha,
     }),
   });

   if (!response.ok) {
     throw new Error('Erro na solicitação: ' + response.status);
   }

   const data = await response.json();
   return data, {"sucesso": true};
 } catch (error) {
   console.error('Erro na solicitação:', error);
   throw error;
 }
};

// Autenticacao do usuario
export const autenticarUsuario = async (email, senha) => {
  try {
    const response = await fetch(`http://${ip}:${port}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }

    const data = await response.json();
    return data, {"sucesso": true};
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
 };