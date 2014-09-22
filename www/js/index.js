document.addEventListener('deviceready', function() {
  var datagram = cordova.require("in.girish.datagram.datagram");
  
  console.log(" datagram ===> ", datagram);
  
  var broadcastSocket = datagram.createSocket("multicast-udp4");
  
  broadcastSocket.bind(3003, function(data) {});
  broadcastSocket.on("message", function(data, info) {
    alert(data);
    alert(JSON.stringify(info));
  });
  
  // Find a server using broadcasting.
  var button = document.getElementById("button");
  button.addEventListener("click", function() {
    alert("click");
    broadcastSocket.send("Hello", "255.255.255.255", 3002, function() {
      
    });
  });
});

