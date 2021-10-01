// import _ from 'lodash';
// import printMe from './print.js';

import {cube} from './math.js';

if(process.env.NODE_ENV !== 'production'){
  console.log('Looks like we are in development mode!');
}

// function getCommponent(){
//   return import('lodash').then( ({default:_})=>{
//       const element = document.createElement("div");
//       element.innerHTML = _.join(['Hello','webpack'],' ');
//       return element;
//   }).catch(error=>'An error occurred while loading the component');
// }
async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
  }
getCommponent().then(component=>{
  document.body.appendChild(component);
})




// function component(){
//     // const element = document.createElement('div');
//     // element.innerHTML =_.join(['Hello','webpack'],' ');

//     const element = document.createElement('pre');
//     element.innerHTML = ['hello webpack!','5 cube is equal to'+cube(5)].join("\n\n");

//     // let btn = document.createElement("button");
//     // btn.innerHTML = 'click me and check the console!';
//     // btn.onclick = printMe;

//     // element.appendChild(btn);
//     return element;
// }
// document.body.appendChild(component());

 if (module.hot) {
      module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
   })
 }