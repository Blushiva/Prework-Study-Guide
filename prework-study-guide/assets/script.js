const topics = ['HTML', 'CSS', 'Git', 'JavaScript', 'Other'];

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() { 
    if (topic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topic === 'Git') {
    console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else if (topic === 'Other') {
    console.log("Let's study OTHER THINGS!");    
    } else {
    console.log('Please try again!');
    }
}   