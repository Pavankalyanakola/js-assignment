function eligible()
{
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let eligibility = (age < 18 ) ? "Too young to vote.":"Old enough to vote.";
   
      document.write("hello "+name+" you are "+eligibility)
    
}