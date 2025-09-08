function calcImc(){
    let container = document.getElementById('container')
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    //let resposta = document.getElementById('resposta')
    let resposta = document.createElement('span')
    resposta.classList.add('resposta')
    container.appendChild(resposta)

        if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resposta.innerHTML = `Os valores de altura e peso devem ser maiores do que <strong>0 (zero)<strong>`
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = '';
    let mensagemCuidados = '';
    if(imc <= 17) {
        classificacao= `Muito abaixo do peso.`
        mensagemCuidados = `Estar nesta faixa de IMC indica um estado de magreza que requer 
        atenção e cuidado especial. Esta condição pode estar associada a deficiências 
        nutricionais e a um sistema imunológico enfraquecido, impactando sua energia e saúde 
        geral. É fundamental e altamente recomendado que você procure um médico para uma 
        avaliação completa e para traçar um plano de recuperação seguro e saudável.`;
    } else if(imc <= 18.5) {
        classificacao = `<strong>Abaixo do peso</strong>.`
        mensagemCuidados = `Manter um peso saudável é fundamental para o 
        bem-estar. Considere enriquecer sua dieta com alimentos nutritivos e calóricos, como 
        nozes, abacate e azeite. A prática de exercícios de força pode ajudar no ganho de massa
        muscular. É sempre recomendado buscar a orientação de um médico ou nutricionista para 
        um acompanhamento personalizado e seguro.`;
    } else if(imc <= 24.9) {
        classificacao = `<strong>Peso normal</strong>.` 
        mensagemCuidados = `Parabéns por manter-se em uma faixa de peso saudável! 
        O segredo para continuar assim é a consistência. Mantenha uma alimentação equilibrada, 
        rica em nutrientes, e a prática regular de atividades físicas que lhe tragam prazer. 
        Cuidar do seu corpo é um investimento contínuo na sua qualidade de vida e na sua energia 
        para o dia a dia.`;
    } else if(imc <= 29.9) {
        classificacao = `<strong>Acima do peso</strong>.` 
        mensagemCuidados = `Estar nesta faixa de peso indica um 
        bom momento para focar em hábitos mais saudáveis. Pequenas mudanças, como aumentar o 
        consumo de vegetais e frutas e reduzir alimentos ultraprocessados, já trazem grandes 
        benefícios. Incluir uma atividade física regular na sua rotina também é essencial. 
        Um profissional de saúde pode te ajudar a traçar metas realistas e seguras.`;
    } else if(imc <= 34.9) {
        classificacao = `<strong>Obesidade grau I</strong>.`
        mensagemCuidados = `A atenção à saúde se torna ainda mais 
        importante nesta fase. O acúmulo de gordura corporal pode começar a impactar o bem-estar 
        geral. É fortemente recomendado procurar um médico ou nutricionista para desenvolver um 
        plano alimentar e de exercícios que seja adequado e seguro para você, visando não apenas 
        a perda de peso, mas a melhoria da sua saúde como um todo.`;
    } else if(imc <= 39.9) {
        classificacao = `<strong>Obesidade grau II</strong>.`
        mensagemCuidados = `Nesta faixa, o acompanhamento 
        profissional é fundamental para prevenir riscos à saúde associados ao excesso de peso. 
        A jornada para um estilo de vida mais saudável deve ser guiada por uma equipe de saúde, 
        que pode incluir médicos, nutricionistas e educadores físicos. O foco é em mudanças 
        sustentáveis para garantir resultados seguros e duradouros.`;
    } else{
        classificacao = `<strong>Obesidade grau III</strong>.`
        mensagemCuidados = `também chamada de obesidade mórbida, 
        exige atenção e cuidado médico imediatos. É crucial estar sob a supervisão de uma equipe 
        multidisciplinar para um tratamento seguro e eficaz. O acompanhamento profissional é o 
        caminho mais seguro para recuperar a saúde e melhorar significativamente sua qualidade de 
        vida.`;
    }
    resposta.innerHTML = 
        `Seu IMC é ${imc.toFixed(2)}. ${classificacao}
        <p class="mensagemCuidados">${mensagemCuidados}</p>
    `;//<p> criado para deixar a mensagem abaixo do resultado do IMC.
}