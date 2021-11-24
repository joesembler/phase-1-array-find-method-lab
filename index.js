const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

  
  function superbowlWin(record){
    const found = record.find(isW);
    if (found != null)
    {
        return found.year;
    }
    else{
        return found;
    }
  }


  function isW(record){
    return record.result === 'W';
  }