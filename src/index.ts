interface OS {
    name: string;
    language: string;
}
const desert = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language');
}