const Jsoup = org.jsoup.Jsoup;
const Lw = '\u200b'.repeat(1000);
const Ll = '⎼'.repeat(50);

function getGameRanking(n) {
    let parse = Jsoup.connect('http://gevolution.co.kr/rank/aos').get().select('.rank1').toArray()
                .filter((_, i) => i%3 == 0)
                .map((e, i) => ++i+'위 | '+e.text()).join('\n');
    let result = [
    '• 모바일 무료 게임 순위입니다.'+Lw,
    Ll, parse, Ll, 'doami'
    ].join('\n');
    return n ? [[result]] : result;
};
