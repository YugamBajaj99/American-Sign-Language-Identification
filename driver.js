const webcam = new Webcam(document.getElementById('wc'));

async function main() {
              // Load the MediaPipe handpose model.
              await webcam.setup();
              const model = await handpose.load()
              // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a
              // hand prediction from the MediaPipe graph.
              
              
}


async function handleButton(elem){
               const model = await handpose.load();
                console.log(model)
                  const img = webcam.capture();
                  var temp = new Array(63);
                  var c = 0;
              const predictions = await model.estimateHands(img);
              //predictions.forEach(hand => console.log(predictions.landmarks));
              //predictions.forEach(hand => console.log(predictions.boundingBox));
              //predictions.forEach(hand => console.log(predictions));
              if (predictions.length > 0) {


                for (let i = 0; i < predictions.length; i++) {
                  const keypoints = predictions[i].landmarks;
              
                  for (let i = 0; i < keypoints.length; i++) {
                    const [x, y, z] = keypoints[i];
                    temp[c] = x;
                    temp[c+1] = y;
                    temp[c+2] = z;
                    c = c+3;
                    //console.log(`ax.scatter(${x}, ${y}, ${z})`);
                  }
                }
              }
              console.log(temp);
            }
main();