function sendData()
{

      var input1 = document.getElementById('CardNum').value;
            document.getElementById('TakeCardNum').value=input1;
      var input2 = document.getElementById('HolderName').value;
      document.getElementById('TakeHolderName').value = input2;
      var input3 = document.getElementById('ExpDate').value;
      document.getElementById('TakeExpDate').value = input3;


}
sendData();