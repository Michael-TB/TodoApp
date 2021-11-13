let input= prompt('what would you like to do');
const todos =['Read a book', 'Call a loved one'];
while (input!== 'quit' && input !=='r'){
  if(input=== 'list'){
    console.log('************')
    for(let i= 0; i,todos.length;i++){
      console.log('${i}: ${todos[i]}');
      }
      console.log('***********')
  }else if (input ==='new'){
  const newTodo = prompt('what is the new todo?');
  todos.push(newTodo);
  console.log('${newTodo} has been added to the list')
  }else if (input === 'delete'){
    const index = parseInt(prompt('Enter an index to delete'));
    if (!Number.isNaN(index)) {
      const deleted =todos.splice(index, 1);
      console.log('deleted ${deleted[0]}');
    } else {
      console.log('Unknown index')
    }
  }
  input = prompt('what would you like to do?')  
}
console.log('Go ahead and QUIT the App!')