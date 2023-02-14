let menu = alert(`Guessing random number game
peraturan :
Silahkan pilih diantara angka 1-3 secara bergantian Pemain yang berhasil menebak angka dengan benar maka akan mendapat 1 poin.
Permainan akan berlangsung sebanyak 3 kali.
Jika salah satu pemain mendapatkan 3 poin maka permainan dihentikan dan pemain
tersebutlah yang menang.
MARI BERMAIN DENGAN RUKUN :D`);

let n1 = 0;
let n2 = 0;

while (n1<3 || n2<3){
    const getprob = Math.floor(Math.random()*3)+1;
    console.log(getprob);
    if(n2==3 || n1==3){
        if (n2>n1){
            alert('Selamat Player 2 Memenangkan Gamenya')
            break;
        }else if (n1>n2){
            alert('Selamat Player 1 Memenangkan Gamenya')
            break;
        }else{
            alert('Game Rusak');
        }
    }else{
        let p1 = parseInt(prompt(`Silahkan Player 1 menebak angka`));
        while(p1<1 || p1>3){
            p1 = parseInt(prompt(`Silahkan masukan angka 1-3
            Silahkan Player 1 menebak angka`));
        }
        let p2 = parseInt(prompt(`Silahkan Player 2 menebak angka`));
        while(p2 == p1 || p2<1 || p2>3){
            p2 = parseInt(prompt(`Silahkan pilih angka antara 1-3 dan selain angka ${p1}
            Silahkan Player 2 menebak angka`));
        }
        console.log(p1 , p2);
        if(p1 == getprob){
            n1++;
            alert(`Selamat Player 1 WIN
            Kedudukan sementara Player 1 (${n1}) vs (${n2}) Player 2`)
            console.log("score p1",n1)
        }else if (p2 == getprob){
            n2++;
            console.log("score p2",n2)
            alert(`Selamat Player 2 WIN 
            Kedudukan sementara Player 1 (${n1}) vs (${n2}) Player 2`)
        }else{
            alert(`Masih seri
            Kedudukan sementara Player 1 (${n1}) vs (${n2}) Player 2`)
        }
    }
}
