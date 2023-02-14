let nilai_siswa = prompt (`Definisi score :
Score 0-50 adalah E
Score 51-60 adalah D
Score 61-70 adalah C
Score 71-80 adalah B
Score 81-100 adalah A

Silahkan Masukan Nilai`);

if (nilai_siswa >-1 && nilai_siswa <= 50){
    alert('E');
}else if (nilai_siswa >50 && nilai_siswa <= 60){
    alert('D');
}else if (nilai_siswa >60 && nilai_siswa <=70){
    alert('C');
}else if (nilai_siswa >70 && nilai_siswa <=80){
    alert('B');
}else if (nilai_siswa >80 && nilai_siswa <=100){
    alert('A');
}else{console.log('undefined')}