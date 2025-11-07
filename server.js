// 今回はクライアントサイドもルーティングもないので何もimportしない

const kv = await Deno.openKv();

//セット
const pw = await kv.get(['dog', 'いぬ'], {power: 10, speed: 5});

//ゲット
const dog = await kv.get(['dog', 'いぬ']);
console.log('power:' + dog.value);
console.log('value:' + JSON.stringify(dog.value))
console.log('key:' + dog.key);
console.log(dog.value, dog.key);

const kerai = await kv.get(['setvant'])
console.log('dog:' + JSON.stringify(kerai.value))