// Content model. To add a world: add an entry to WORLDS with its words (each word needs a 3D model
// builder in props.js FRUIT_BUILDERS or a new builder) and audio keys in lines.json, then list its stages.
export const WORLDS = [
  {
    id: 'fruit', ar: 'جزيرة الفواكه', en: 'Fruit Island', color: '#ff7a1f', open: true,
    mission: 'اجمع الفواكه الضايعة ورجّعها للجزيرة',
    words: [
      { id: 'apple', en: 'Apple', ar: 'تفاحة' },
      { id: 'banana', en: 'Banana', ar: 'موزة' },
      { id: 'orange', en: 'Orange', ar: 'برتقالة' },
      { id: 'strawberry', en: 'Strawberry', ar: 'فراولة' },
      { id: 'grapes', en: 'Grapes', ar: 'عنب' },
    ],
    stages: [
      { type: 'meet', host: 'lulu', ar: 'تعرّف على الفواكه', en: 'Meet the fruits', reward: 'sunglasses', restores: 'apple' },
      { type: 'listen', host: 'bibo', ar: 'اسمع واختر', en: 'Listen & choose', reward: 'flowers', restores: 'banana' },
      { type: 'collect', host: 'toota', ar: 'اجمع وعُد', en: 'Collect & count', reward: 'partyhat', restores: 'orange' },
      { type: 'match', host: 'bondoq', ar: 'طابق الكلمة', en: 'Match the word', reward: 'bowtie', restores: 'strawberry' },
      { type: 'speak', host: 'bibo', ar: 'انطق الكلمة', en: 'Say the word', reward: 'explorer', restores: 'grapes' },
    ],
  },
  { id: 'forest', ar: 'الغابة السعيدة', en: 'Happy Forest', color: '#2f9e5a', words: ['Cat', 'Dog', 'Lion', 'Elephant', 'Bird'], mission: 'ساعد الحيوانات تلقى بيوتها' },
  { id: 'colors', ar: 'مدينة الألوان', en: 'Color City', color: '#ff5f8f', words: ['Red', 'Blue', 'Yellow', 'Green', 'Pink'], mission: 'أصلح المدينة بالألوان' },
  { id: 'sea', ar: 'أعماق البحار', en: 'Deep Sea', color: '#139fc4', words: ['Fish', 'Water', 'Sea', 'Turtle', 'Shark'], mission: 'أنقذ كائنات البحر ولاقِ الكنز' },
  { id: 'space', ar: 'الفضاء المدهش', en: 'Amazing Space', color: '#7b61ff', words: ['Sun', 'Moon', 'Star', 'Rocket', 'Planet'], mission: 'ابنِ صاروخ وسافر للفضاء' },
  { id: 'castle', ar: 'قلعة الجمل السحرية', en: 'Sentence Castle', color: '#b04fd6', words: ['Hello', 'Goodbye', 'Thank you', 'How are you?'], mission: 'تعلّم محادثات إنجليزية بسيطة' },
];

export const BADGES = [
  { id: 'first', ar: 'أول نجمة', desc: 'خلّصت أول مرحلة' },
  { id: 'listener', ar: 'بطل الاستماع', desc: '3 نجوم في «اسمع واختر»' },
  { id: 'counter', ar: 'نجم العدّ', desc: 'خلّصت «اجمع وعُد»' },
  { id: 'matcher', ar: 'عقل ذكي', desc: 'خلّصت ألغاز بندق' },
  { id: 'speaker', ar: 'المتكلّم الصغير', desc: 'نطقت كل كلمات الجزيرة' },
  { id: 'stars10', ar: 'جامع النجوم', desc: 'جمعت 10 نجوم' },
  { id: 'fruit', ar: 'منقذ جزيرة الفواكه', desc: 'رجّعت كل الفواكه' },
];

export const AVATARS = ['lulu', 'bibo', 'toota', 'bondoq'];
