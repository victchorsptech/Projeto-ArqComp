// temporizador
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer <= 0) {
            timer = 0;
            resposta.innerHTML = `Infelizmente o tempo acabou! Clique no botão abaixo para iniciar um novo jogo `;
            novo_jogo.style.display = 'flex'
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};



// Fechar Instruções
function close_instructions(){
    instructions.style.display = 'none';
}
// Fechar Menu
function close_navbar(){
    vertical_navbar.style.display = 'none';
    crossword.style.padding = '0';
}


// CS
function cs(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Linha de controle na eletrônica digital?`;
    document.getElementById("btn").onclick = function validar_cs(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "CS"){
            // Adicionando Respota a Tabela
            cpu_1.innerHTML = `C`;
            cs_2.innerHTML = `S`;
            // Adicionando Cor a Tabela
            cpu_1.style.border = `2.5px solid var(--success)`;
            cs_2.style.border = `2.5px solid var(--success)`;
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`;
            validation_msg.style.color = 'var(--success)';
        }  
        else{
            // Adicionando Cor a Tabela
            cpu_1.style.border = `2.5px solid var(--fail)`;
            cs_2.style.border = `2.5px solid var(--fail)`;
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)'; 
        }
    };
};
// CPU
function cpu(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Responsável por executar todas as operações
    necessárias para o funcionamento do dispositivo?`;
    document.getElementById("btn").onclick = function validar_cpu(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "CPU"){
            // Adicionando Respota a Tabela
            cpu_1.innerHTML = `C`;
            cpu_2.innerHTML = `P`;
            dual_cpu_2.innerHTML = `U`;
            // Adicionando Cor a Tabela
            cpu_1.style.border = `2.5px solid var(--success)`;
            cpu_2.style.border = `2.5px solid var(--success)`;            
            dual_cpu_2.style.border = `2.5px solid var(--success)`;            
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`;
            validation_msg.style.color = 'var(--success)';
        }  
        else {
            // Adicionando Cor a Tabela
            cpu_1.style.border = `2.5px solid var(--fail)`;
            cpu_2.style.border = `2.5px solid var(--fail)`;            
            dual_cpu_2.style.border = `2.5px solid var(--fail)`;            
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// ULA
function ula(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Realiza operações de adição e booleana ?`;
    document.getElementById("btn").onclick = function validar_ula(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "ULA"){
            // Adicionando Respota a Tabela
            ula_1.innerHTML = `U`;
            dual_ula_2.innerHTML = `L`;
            ula_3.innerHTML = `A`;
            // Adicionando Cor a Tabela
            ula_1.style.border = `2.5px solid var(--success)`;
            dual_ula_2.style.border = `2.5px solid var(--success)`;            
            ula_3.style.border = `2.5px solid var(--success)`;            
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`;
            validation_msg.style.color = 'var(--success)';
        }  
        else {
            // Adicionando Cor a Tabela
            ula_1.style.border = `2.5px solid var(--fail)`;
            dual_ula_2.style.border = `2.5px solid var(--fail)`;            
            ula_3.style.border = `2.5px solid var(--fail)`;            
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Dual Core
function dual_core(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Processador com 2 núcleos?`;
    document.getElementById("btn").onclick = function validar_dual_core(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "DUAL CORE" || answer == "DUALCORE"){
            // Adicionando Respota a Tabela
            dual_1.innerHTML = `D`;
            dual_cpu_2.innerHTML = `U`;
            dual_3.innerHTML = `A`;
            dual_ula_2.innerHTML = `L`;
            dual_5.innerHTML = `-`;
            dual_6.innerHTML = `C`;
            dual_7.innerHTML = `O`;
            dual_8.innerHTML = `R`;
            dual_memoria_9.innerHTML = `E`;
            // Adicionando Cor a Tabela
            dual_1.style.border = `2.5px solid var(--success)`;
            dual_cpu_2.style.border = `2.5px solid var(--success)`;            
            dual_3.style.border = `2.5px solid var(--success)`;            
            dual_ula_2.style.border = `2.5px solid var(--success)`;            
            dual_5.style.border = `2.5px solid var(--success)`;            
            dual_6.style.border = `2.5px solid var(--success)`;            
            dual_7.style.border = `2.5px solid var(--success)`;            
            dual_8.style.border = `2.5px solid var(--success)`;            
            dual_memoria_9.style.border = `2.5px solid var(--success)`;            
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`;  
            validation_msg.style.color = 'var(--success)';   
        }  
        else {
            // Adicionando Cor a Tabela
            dual_1.style.border = `2.5px solid var(--fail)`;
            dual_cpu_2.style.border = `2.5px solid var(--fail)`;            
            dual_3.style.border = `2.5px solid var(--fail)`;            
            dual_ula_2.style.border = `2.5px solid var(--fail)`;            
            dual_5.style.border = `2.5px solid var(--fail)`;            
            dual_6.style.border = `2.5px solid var(--fail)`;            
            dual_7.style.border = `2.5px solid var(--fail)`;            
            dual_8.style.border = `2.5px solid var(--fail)`;            
            dual_memoria_9.style.border = `2.5px solid var(--fail)`;  
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }

}
// Memória de Massa
function mem_massa(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Tipo de memória que armazenar grandes quantidades?`;
    document.getElementById("btn").onclick = function validar_dual_core(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "MEMORIA DE MASSA" || answer == "MEMORIADEMASSA"){
            // Adicionando Respota a Tabela
            memoria_1.innerHTML = `M`;
            dual_memoria_9.innerHTML = `E`;
            memoria_2.innerHTML = `M`;
            eprom_memoria_4.innerHTML = `O`;
            memoria_4.innerHTML = `R`;
            memoria_i7_5.innerHTML = `I`;
            memoria_6.innerHTML = `A`;
            memoria_7.innerHTML = `-`;
            quad_memoria_4.innerHTML = `D`;
            memoria_8.innerHTML = `E`;
            memoria_9.innerHTML = `-`;
            rom_memoria_3.innerHTML = `M`;
            memoria_10.innerHTML = `A`;
            memoria_11.innerHTML = `S`;
            registradores_memoria_13.innerHTML = `S`;
            memoria_13.innerHTML = `A`;
            // Adicionando Cor a Tabela
            memoria_1.style.border = `2.5px solid var(--success)`;
            dual_memoria_9.style.border = `2.5px solid var(--success)`;
            memoria_2.style.border = `2.5px solid var(--success)`;
            eprom_memoria_4.style.border = `2.5px solid var(--success)`;
            memoria_4.style.border = `2.5px solid var(--success)`;
            memoria_i7_5.style.border = `2.5px solid var(--success)`;
            memoria_6.style.border = `2.5px solid var(--success)`;
            memoria_7.style.border = `2.5px solid var(--success)`;
            memoria_4.style.border = `2.5px solid var(--success)`;
            quad_memoria_4.style.border = `2.5px solid var(--success)`;
            memoria_8.style.border = `2.5px solid var(--success)`;
            memoria_9.style.border = `2.5px solid var(--success)`;
            rom_memoria_3.style.border = `2.5px solid var(--success)`;
            memoria_10.style.border = `2.5px solid var(--success)`;
            memoria_11.style.border = `2.5px solid var(--success)`;
            registradores_memoria_13.style.border = `2.5px solid var(--success)`;
            memoria_13.style.border = `2.5px solid var(--success)`;
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`;
            validation_msg.style.color = 'var(--success)';
        }  
        else {
            // Adicionando Cor a Tabela
            memoria_1.style.border = `2.5px solid var(--fail)`;
            dual_memoria_9.style.border = `2.5px solid var(--fail)`;
            memoria_2.style.border = `2.5px solid var(--fail)`;
            eprom_memoria_4.style.border = `2.5px solid var(--fail)`;
            memoria_4.style.border = `2.5px solid var(--fail)`;
            memoria_i7_5.style.border = `2.5px solid var(--fail)`;
            memoria_6.style.border = `2.5px solid var(--fail)`;
            memoria_7.style.border = `2.5px solid var(--fail)`;
            memoria_4.style.border = `2.5px solid var(--fail)`;
            quad_memoria_4.style.border = `2.5px solid var(--fail)`;
            memoria_8.style.border = `2.5px solid var(--fail)`;
            memoria_9.style.border = `2.5px solid var(--fail)`;
            rom_memoria_3.style.border = `2.5px solid var(--fail)`;
            memoria_10.style.border = `2.5px solid var(--fail)`;
            memoria_11.style.border = `2.5px solid var(--fail)`;
            registradores_memoria_13.style.border = `2.5px solid var(--fail)`;
            memoria_13.style.border = `2.5px solid var(--fail)`;
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Eprom
function eprom(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Chip de memória que guarda seus dados quando a energia
    é desligada?`;
    document.getElementById("btn").onclick = function validar_dual_core(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "EPROM"){
            // Adicionando Respota a Tabela
            eprom_1.innerHTML = `E`;
            eprom_2.innerHTML = `P`;
            eprom_3.innerHTML = `R`;
            eprom_memoria_4.innerHTML = `O`;
            eprom_5.innerHTML = `M`;
            // Adicionando Cor a Tabela
            eprom_1.style.border = `2.5px solid var(--success)`;
            eprom_2.style.border = `2.5px solid var(--success)`;            
            eprom_3.style.border = `2.5px solid var(--success)`;            
            eprom_memoria_4.style.border = `2.5px solid var(--success)`;            
            eprom_5.style.border = `2.5px solid var(--success)`;                        
            // Mensagem de Validação
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';    
        }  
        else {
            // Adicionando Cor a Tabela
            eprom_1.style.border = `2.5px solid var(--fail)`;
            eprom_2.style.border = `2.5px solid var(--fail)`;            
            eprom_3.style.border = `2.5px solid var(--fail)`;            
            eprom_memoria_4.style.border = `2.5px solid var(--fail)`;            
            eprom_5.style.border = `2.5px solid var(--fail)`;             
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// i7
function i7(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Processador de uso avançada da linha Intel Core?`;
    document.getElementById("btn").onclick = function validar_i7(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "I7"){
            // Adicionando Respota a Tabela
            memoria_i7_5.innerHTML = `I`;
            i7_1.innerHTML = `7`;   
            // Adicionando Cor a Tabela
            memoria_i7_5.style.border = `2.5px solid var(--success)`;
            i7_1.style.border = `2.5px solid var(--success)`;  
            // Mensagem de Validação          
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';    
        }  
        else {
            // Adicionando Cor a Tabela
            memoria_i7_5.style.border = `2.5px solid var(--fail)`;
            i7_1.style.border = `2.5px solid var(--fail)`;                         
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Quad Core
function quad_core(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Processador com 4 núcleos?`;
    document.getElementById("btn").onclick = function validar_quad_core(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "QUAD CORE" || answer == "QUADCORE"){
            // Adicionando Respota a Tabela
            quad_1.innerHTML = `Q`;
            quad_2.innerHTML = `U`;   
            quad_3.innerHTML = `A`;   
            quad_memoria_4.innerHTML = `D`;   
            quad_5.innerHTML = `-`;   
            quad_6.innerHTML = `C`;   
            quad_7.innerHTML = `O`;   
            quad_8.innerHTML = `R`;   
            quad_9.innerHTML = `E`;   
            // Adicionando Cor a Tabela
            quad_1.style.border = `2.5px solid var(--success)`;
            quad_2.style.border = `2.5px solid var(--success)`;            
            quad_3.style.border = `2.5px solid var(--success)`;            
            quad_memoria_4.style.border = `2.5px solid var(--success)`;            
            quad_5.style.border = `2.5px solid var(--success)`;          
            quad_6.style.border = `2.5px solid var(--success)`;          
            quad_7.style.border = `2.5px solid var(--success)`;          
            quad_8.style.border = `2.5px solid var(--success)`;          
            quad_9.style.border = `2.5px solid var(--success)`;
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                     
        }  
        else {
            // Adicionando Cor a Tabela
            quad_1.style.border = `2.5px solid var(--fail)`;
            quad_2.style.border = `2.5px solid var(--fail)`;                         
            quad_3.style.border = `2.5px solid var(--fail)`;                         
            quad_memoria_4.style.border = `2.5px solid var(--fail)`;                         
            quad_5.style.border = `2.5px solid var(--fail)`;                         
            quad_6.style.border = `2.5px solid var(--fail)`;                         
            quad_7.style.border = `2.5px solid var(--fail)`;                         
            quad_8.style.border = `2.5px solid var(--fail)`;                         
            quad_9.style.border = `2.5px solid var(--fail)`;                         
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// ROM
function rom(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Armazena dados apenas para leitura?`;
    document.getElementById("btn").onclick = function validar_rom(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "ROM"){
            // Adicionando Respota a Tabela
            rom_1.innerHTML = `R`;
            rom_2.innerHTML = `O`;   
            rom_memoria_3.innerHTML = `M`;   
            // Adicionando Cor a Tabela
            rom_1.style.border = `2.5px solid var(--success)`;
            rom_2.style.border = `2.5px solid var(--success)`;                         
            rom_memoria_3.style.border = `2.5px solid var(--success)`; 
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                 
        }  
        else {
            // Adicionando Cor a Tabela
            rom_1.style.border = `2.5px solid var(--fail)`;
            rom_2.style.border = `2.5px solid var(--fail)`;                         
            rom_memoria_3.style.border = `2.5px solid var(--fail)`;                         
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Registradores
function registradores(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Memória de dentro da própria CPU?`;
    document.getElementById("btn").onclick = function validar_registradores(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "REGISTRADORES"){
            // Adicionando Respota a Tabela
            registradores_1.innerHTML = `R`;
            registradores_adress_2.innerHTML = `E`;   
            registradores_3.innerHTML = `G`;   
            registradores_i5_4.innerHTML = `I`;   
            registradores_5.innerHTML = `S`;   
            registradores_6.innerHTML = `T`;   
            registradores_7.innerHTML = `R`;   
            registradores_flash_8.innerHTML = `A`;   
            registradores_9.innerHTML = `D`;   
            registradores_10.innerHTML = `O`;   
            registradores_ram_11.innerHTML = `R`;   
            registradores_12.innerHTML = `E`;   
            registradores_memoria_13.innerHTML = `S`;   
            // Adicionando Cor a Tabela
            registradores_1.style.border = `2.5px solid var(--success)`;
            registradores_adress_2.style.border = `2.5px solid var(--success)`;                         
            registradores_3.style.border = `2.5px solid var(--success)`;             
            registradores_i5_4.style.border = `2.5px solid var(--success)`;             
            registradores_5.style.border = `2.5px solid var(--success)`;             
            registradores_6.style.border = `2.5px solid var(--success)`;             
            registradores_7.style.border = `2.5px solid var(--success)`;             
            registradores_flash_8.style.border = `2.5px solid var(--success)`;             
            registradores_9.style.border = `2.5px solid var(--success)`;             
            registradores_10.style.border = `2.5px solid var(--success)`;             
            registradores_ram_11.style.border = `2.5px solid var(--success)`;             
            registradores_12.style.border = `2.5px solid var(--success)`;             
            registradores_memoria_13.style.border = `2.5px solid var(--success)`;
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                          
        }  
        else {
            // Adicionando Cor a Tabela
            registradores_1.style.border = `2.5px solid var(--fail)`;
            registradores_adress_2.style.border = `2.5px solid var(--fail)`;                         
            registradores_3.style.border = `2.5px solid var(--fail)`;             
            registradores_i5_4.style.border = `2.5px solid var(--fail)`;             
            registradores_5.style.border = `2.5px solid var(--fail)`;             
            registradores_6.style.border = `2.5px solid var(--fail)`;             
            registradores_7.style.border = `2.5px solid var(--fail)`;             
            registradores_flash_8.style.border = `2.5px solid var(--fail)`;             
            registradores_9.style.border = `2.5px solid var(--fail)`;             
            registradores_10.style.border = `2.5px solid var(--fail)`;             
            registradores_ram_11.style.border = `2.5px solid var(--fail)`;             
            registradores_12.style.border = `2.5px solid var(--fail)`;             
            registradores_memoria_13.style.border = `2.5px solid var(--fail)`;                       
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Data Bus
function data_bus(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Circula os dados que são recebidos ou enviados?`;
    document.getElementById("btn").onclick = function validar_data_bus(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "DATA BUS" || answer == "DATABUS" ){
            // Adicionando Respota a Tabela
            data_1.innerHTML = `D`;
            data_2.innerHTML = `A`;   
            data_3.innerHTML = `T`;   
            data_4.innerHTML = `A`;   
            data_5.innerHTML = `-`;   
            data_adress_6.innerHTML = `B`;   
            data_7.innerHTML = `U`;   
            data_8.innerHTML = `S`;   
            // Adicionando Cor a Tabela
            data_1.style.border = `2.5px solid var(--success)`;
            data_2.style.border = `2.5px solid var(--success)`;                         
            data_3.style.border = `2.5px solid var(--success)`;             
            data_4.style.border = `2.5px solid var(--success)`;             
            data_5.style.border = `2.5px solid var(--success)`;             
            data_adress_6.style.border = `2.5px solid var(--success)`;             
            data_7.style.border = `2.5px solid var(--success)`;             
            data_8.style.border = `2.5px solid var(--success)`;  
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                                    
        }  
        else {
            // Adicionando Cor a Tabela
            data_1.style.border = `2.5px solid var(--fail)`;
            data_2.style.border = `2.5px solid var(--fail)`;                         
            data_3.style.border = `2.5px solid var(--fail)`;             
            data_4.style.border = `2.5px solid var(--fail)`;             
            data_5.style.border = `2.5px solid var(--fail)`;             
            data_adress_6.style.border = `2.5px solid var(--fail)`;             
            data_7.style.border = `2.5px solid var(--fail)`;             
            data_8.style.border = `2.5px solid var(--fail)`;                      
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Adress Bus
function adress_bus(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Usado para transferir dados entre dispositivos?`;
    document.getElementById("btn").onclick = function validar_adress_bus(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "ADRESS BUS" || answer == "ADRESSBUS" ){
            // Adicionando Respota a Tabela
            adress_1.innerHTML = `A`;
            adress_2.innerHTML = `D`;   
            adress_3.innerHTML = `R`;   
            registradores_adress_2.innerHTML = `E`;        
            adress_4.innerHTML = `S`;   
            adress_5.innerHTML = `S`;   
            adress_6.innerHTML = `-`;   
            data_adress_6.innerHTML = `B`;   
            adress_7.innerHTML = `U`;   
            adress_8.innerHTML = `S`;   
            // Adicionando Cor a Tabela
            adress_1.style.border = `2.5px solid var(--success)`;
            adress_2.style.border = `2.5px solid var(--success)`;                         
            adress_3.style.border = `2.5px solid var(--success)`;             
            registradores_adress_2.style.border = `2.5px solid var(--success)`;             
            adress_4.style.border = `2.5px solid var(--success)`;             
            adress_5.style.border = `2.5px solid var(--success)`;             
            adress_6.style.border = `2.5px solid var(--success)`;             
            data_adress_6.style.border = `2.5px solid var(--success)`;                         
            adress_7.style.border = `2.5px solid var(--success)`;                         
            adress_8.style.border = `2.5px solid var(--success)`;   
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                                   
        }  
        else {
            // Adicionando Cor a Tabela
            adress_1.style.border = `2.5px solid var(--fail)`;
            adress_2.style.border = `2.5px solid var(--fail)`;                         
            adress_3.style.border = `2.5px solid var(--fail)`;             
            registradores_adress_2.style.border = `2.5px solid var(--fail)`;             
            adress_4.style.border = `2.5px solid var(--fail)`;             
            adress_5.style.border = `2.5px solid var(--fail)`;             
            adress_6.style.border = `2.5px solid var(--fail)`;             
            data_adress_6.style.border = `2.5px solid var(--fail)`;                         
            adress_7.style.border = `2.5px solid var(--fail)`;                         
            adress_8.style.border = `2.5px solid var(--fail)`;                        
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// i5
function i5(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Intermediario da linha Intel Core?`;
    document.getElementById("btn").onclick = function validar_i5(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "I5"){
            // Adicionando Respota a Tabela
            registradores_i5_4.innerHTML = `I`;
            i5_2.innerHTML = `5`;   
            // Adicionando Cor a Tabela
            registradores_i5_4.style.border = `2.5px solid var(--success)`;
            i5_2.style.border = `2.5px solid var(--success)`;    
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                     
        }  
        else {
            // Adicionando Cor a Tabela
            registradores_i5_4.style.border = `2.5px solid var(--fail)`;
            i5_2.style.border = `2.5px solid var(--fail)`;                         
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Flash
function flash(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Chip de Memória que armazena informações sem necessidade
    de energia?`;
    document.getElementById("btn").onclick = function validar_flash(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "FLASH"){
            // Adicionando Respota a Tabela
            flash_1.innerHTML = `F`;
            flash_2.innerHTML = `L`;   
            registradores_flash_8.innerHTML = `A`;   
            flash_3.innerHTML = `S`;  
            flash_4.innerHTML = `H`;
            // Adicionando Cor a Tabela
            flash_1.style.border = `2.5px solid var(--success)`;
            flash_2.style.border = `2.5px solid var(--success)`;            
            registradores_flash_8.style.border = `2.5px solid var(--success)`;            
            flash_3.style.border = `2.5px solid var(--success)`;            
            flash_4.style.border = `2.5px solid var(--success)`;      
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                   
        }  
        else {
            // Adicionando Cor a Tabela
            flash_1.style.border = `2.5px solid var(--fail)`;
            flash_2.style.border = `2.5px solid var(--fail)`;            
            registradores_flash_8.style.border = `2.5px solid var(--fail)`;            
            flash_3.style.border = `2.5px solid var(--fail)`;            
            flash_4.style.border = `2.5px solid var(--fail)`;                         
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Ram
function ram(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Tipo de memória responsável pela leitura de arquivos?`;
    document.getElementById("btn").onclick = function validar_ram(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "RAM"){
            // Adicionando Respota a Tabela
            registradores_ram_11.innerHTML = `R`;
            ram_1.innerHTML = `A`;   
            ram_dma_2.innerHTML = `M`;   
            // Adicionando Cor a Tabela
            registradores_ram_11.style.border = `2.5px solid var(--success)`;
            ram_1.style.border = `2.5px solid var(--success)`;            
            ram_dma_2.style.border = `2.5px solid var(--success)`;  
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';                                
        }  
        else {
            // Adicionando Cor a Tabela
            registradores_ram_11.style.border = `2.5px solid var(--fail)`;
            ram_1.style.border = `2.5px solid var(--fail)`;            
            ram_dma_2.style.border = `2.5px solid var(--fail)`;                                  
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}
// Dma
function dma(){
    vertical_navbar.style.display = 'block';
    crossword.style.padding = '0 0 0 27vh';
    question.innerHTML = `Acesso direto à memória?`;
    document.getElementById("btn").onclick = function validar_dma(){
        // Variavel Input
        var answer = (input_answer.value).toUpperCase();
        if(answer == "DMA"){
            // Adicionando Respota a Tabela
            dma_1.innerHTML = `D`;
            ram_dma_2.innerHTML = `M`;   
            dma_2.innerHTML = `A`;   
            // Adicionando Cor a Tabela
            dma_1.style.border = `2.5px solid var(--success)`;
            ram_dma_2.style.border = `2.5px solid var(--success)`;            
            dma_2.style.border = `2.5px solid var(--success)`;                     
            // Mensagem de Validação 
            validation_msg.innerHTML = `Respostas Correta!`; 
            validation_msg.style.color = 'var(--success)';             
        }  
        else {
            // Adicionando Cor a Tabela
            dma_1.style.border = `2.5px solid var(--fail)`;
            ram_dma_2.style.border = `2.5px solid var(--fail)`;            
            dma_2.style.border = `2.5px solid var(--fail)`;                                  
            // Mensagem de Validação
            validation_msg.innerHTML = `Não foi! Tente novamente.`;
            validation_msg.style.color = 'var(--textFail)';
        }
    }
}