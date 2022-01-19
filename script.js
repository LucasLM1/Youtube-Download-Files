//fs = file system, biblioteca local já instalada com o node
//fs que salva os videos localmente
const fs = require('fs');

//ytdl= biblioteca de download de videos do yt
// é necessario fazer sua instalação no cmd
const ytdl = require('ytdl-core');

const videoURL = [
    'https://www.youtube.com/watch?v=046aCDyYy6g',
    'https://www.youtube.com/watch?v=_HByTndEXVw',
    'https://www.youtube.com/watch?v=s-PwNH3BgkY'
]

//ao adicionar um path, lembre-se de colocar o caminho absoluto da sua máquina à pasta que deseja armazenar os videos
const pathToSave = '\\Youtube-Musics\\Videos-Salvos';

//função com dois parametros, sendo um deles o video que representa cada url de video e o index que representa a posiçãode cada uma dessas urls dentro do array
videoURL.forEach((video, index) => {
    ytdl(video).pipe(fs.createWriteStream(pathToSave + 'video'+index+'.mp4'));
})