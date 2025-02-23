
    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const ans = people.some(ele=> 2025 -ele.year > 19)
    // console.log(ans)
    // Array.prototype.every() // is everyone 19 or older?
    const ans1 = people.every(ele => 2025-ele > 19) 
    //console.log(ans1)

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // const answer = comments.find(ele =>{
    //     if(ele.id===823423)
    //         return true
    // })
    // console.log(answer)
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const answer = comments.findIndex(ele =>{
        if(ele.id===823423)
            return true
    })
    comments.splice(answer,1)
    
    console.log(comments);
    
