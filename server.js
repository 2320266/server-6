// 今回はクライアントサイドもルーティングもないので何もimportしない

const kv = await Deno.openKv();

//セット
const pw = await kv.set(['dog', 'いぬ'], {power: 10, speed: 5});

//ゲット
const dog = await kv.get(['dog', 'いぬ']);
console.log('value:' + JSON.stringify(dog.value))
console.log('key:' + dog.key);
console.log(dog.key, dog.value);


await kv.set(['bird', '鳥'], {power: 3, speed: 8});
const bird = await kv.get(['bird', '鳥']);

 const animal = await kv.get(['animal'])
 console.log('dog:' + JSON.stringify(animal.value))

//リスト
const animalList = await kv.list({prefix: ['animal']});
for await (const animal of animalList){
    console.log(animal.key);
    console.log(animal.value);
    List.push(animal.value);
}


//削除
await kv.set(['cat', '猫'], {power: 5, speed: 6});
let animals = await kv.get(['cat', '猫']);
console.log(animals.key, animals.value);

await kv.delete(['cat', '猫']);

animals = await kv.get(['cat', '猫']);
console.log(animals.value);