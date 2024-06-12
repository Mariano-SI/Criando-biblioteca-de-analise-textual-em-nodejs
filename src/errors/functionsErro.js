export default function handleErrors(error){
    if(error.code === 'ENOENT'){
        return 'Arquivo não encontrado';
    }else{
        return 'Erro na aplicação'
    }
}
