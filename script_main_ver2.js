
model_file_name=document.getElementById("model_file_name").value;
number_of_images = parseInt(document.getElementById("myText").value);

number_of_classes = parseInt(document.getElementById("number_of_classes").value);

selected_size = parseInt(document.getElementById("selected_size").value);

file_name = document.getElementById("file_name").value;

file_extension = document.getElementById("file_extension").value;

number_of_training_images = parseInt(document.getElementById("number_of_training_images").value);

batch_size_entered = parseInt(document.getElementById("batch_size_entered").value);



epochs_value = parseInt(document.getElementById("epochs_value").value);


import {MnistData} from './data_final_ver2.js';


async function showExamples(data) {
  number_of_images = parseInt(document.getElementById("myText").value);

  number_of_classes = parseInt(document.getElementById("number_of_classes").value);

  selected_size = parseInt(document.getElementById("selected_size").value);

  file_name = document.getElementById("file_name").value;

  file_extension = document.getElementById("file_extension").value;

  number_of_training_images = parseInt(document.getElementById("number_of_training_images").value);

  epochs_value = parseInt(document.getElementById("epochs_value").value);
  // Create a container in the visor
  const surface =
    tfvis.visor().surface({ name: 'Input Data Examples', tab: 'Input Data'});

  const examples = data.nextTrainBatch(number_of_test_images);

  const numExamples = examples.xs.shape[0];



  var str="";
   str = document.getElementById("class_names").value;
    var classNames = str.split(",");
selected_size = parseInt(document.getElementById("selected_size").value);

  for (let i = 0; i < numExamples; i++) {
    const imageTensor = tf.tidy(() => {
      // Reshape the image to 28x28 px
      return examples.xs
        .slice([i, 0], [1, examples.xs.shape[1]])
        .reshape([selected_size, selected_size, 1]);
    });

    const canvas = document.createElement('canvas');
    canvas.width = selected_size;
    canvas.height = selected_size;
    canvas.style = 'margin: 4px;';
    await tf.browser.toPixels(imageTensor, canvas);
    surface.drawArea.appendChild(canvas);

    imageTensor.dispose();
  }
}

async function run() {
  console.log("Content loaded, ready");
  document.getElementById("training_started").addEventListener("click", start_training);

}
async function start_training() {


  number_of_images = parseInt(document.getElementById("myText").value);

  number_of_classes = parseInt(document.getElementById("number_of_classes").value);

  selected_size = parseInt(document.getElementById("selected_size").value);

  file_name = document.getElementById("file_name").value;

  file_extension = document.getElementById("file_extension").value;

  number_of_training_images = parseInt(document.getElementById("number_of_training_images").value);

  epochs_value = parseInt(document.getElementById("epochs_value").value);

model_file_name = document.getElementById("model_file_name").value;
  starting_number = parseInt(document.getElementById("starting_number").value);
  const data = new MnistData();
  await data.load();
  await showExamples(data);
  const model = getModel();
tfvis.show.modelSummary({name: 'Model Architecture', tab: 'Model'}, model);

await train(model, data);
await showAccuracy(model, data);
await showConfusion(model, data);

await model.save('downloads://'+ model_file_name);


}

document.addEventListener('DOMContentLoaded',run);



function getModel() {
  const model = tf.sequential();
selected_size = parseInt(document.getElementById("selected_size").value);
  const IMAGE_WIDTH = selected_size;
  const IMAGE_HEIGHT = selected_size;
  const IMAGE_CHANNELS = 1;

  // In the first layer of our convolutional neural network we have
  // to specify the input shape. Then we specify some parameters for
  // the convolution operation that takes place in this layer.
  model.add(tf.layers.conv2d({
    inputShape: [selected_size, selected_size, IMAGE_CHANNELS],
    kernelSize: 5,
    filters: 8,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'varianceScaling'
  }));

  // The MaxPooling layer acts as a sort of downsampling using max values
  // in a region instead of averaging.
  model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));

  // Repeat another conv2d + maxPooling stack.
  // Note that we have more filters in the convolution.
  model.add(tf.layers.conv2d({
    kernelSize: 10,
    filters: 16,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'varianceScaling'
  }));



  model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));

  // Now we flatten the output from the 2D filters into a 1D vector to prepare
  // it for input into our last layer. This is common practice when feeding
  // higher dimensional data to a final classification output layer.
  model.add(tf.layers.flatten());

  // Our last layer is a dense layer which has 10 output units, one for each
  // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
  //change here
  const NUM_OUTPUT_CLASSES = parseInt(document.getElementById("number_of_classes").value);
  number_of_classes = NUM_OUTPUT_CLASSES;
  model.add(tf.layers.dense({
    units: NUM_OUTPUT_CLASSES,
    kernelInitializer: 'varianceScaling',
    activation: 'softmax'
  }));


  // Choose an optimizer, loss function and accuracy metric,
  // then compile and return the model
  const optimizer = tf.train.adam();
  model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  return model;
}


async function train(model, data) {
  const metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
  const container = {
    name: 'Model Training', tab: 'Model', styles: { height: '1000px' }
  };
  const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);


  const BATCH_SIZE = batch_size_entered;
  const TRAIN_DATA_SIZE = number_of_training_images;
const TEST_DATA_SIZE = number_of_test_images;
  const [trainXs, trainYs] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);

    return [
      d.xs.reshape([TRAIN_DATA_SIZE, selected_size, selected_size, 1]),
      d.labels

    ];


  });



  const [testXs, testYs] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);//original is nextTestBatch
    return [
      d.xs.reshape([TEST_DATA_SIZE, selected_size, selected_size, 1]),
      d.labels

    ];
  });


  return model.fit(trainXs, trainYs, {
    batchSize: BATCH_SIZE,
    validationData: [testXs, testYs],
    epochs: epochs_value,
    shuffle: true,
    callbacks: fitCallbacks
  });


}


str = document.getElementById("class_names").value;
 classNames = str.split(",");
function doPrediction(model, data, testDataSize = number_of_test_images) {
  const IMAGE_WIDTH = parseInt(document.getElementById("selected_size").value);
  const IMAGE_HEIGHT = parseInt(document.getElementById("selected_size").value);
  const testData = data.nextTrainBatch(testDataSize);//nextTestBatch is oriiginal
  const testxs = testData.xs.reshape([testDataSize, selected_size, selected_size, 1]);
  const labels = testData.labels.argMax(-1);
    console.log("testxs");
  console.log(testxs);
  const preds = model.predict(testxs).argMax(-1);
  console.log("testData.labels.");
  console.log(testData.labels);
  testxs.dispose();
  console.log("testData");
console.log(testData);
  return [preds, labels];
}


async function showAccuracy(model, data) {
  const [preds, labels] = doPrediction(model, data);
  console.log("preds");
  console.log(preds);
  console.log("labels");
  console.log(labels);
  const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
  const container = {name: 'Accuracy', tab: 'Evaluation'};
  var stro = document.getElementById("class_names").value;
  var classNames2 = stro.split(",");
  tfvis.show.perClassAccuracy(container, classAccuracy, classNames2);
  const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
  const container2 = {name: 'Confusion Matrix', tab: 'Evaluation'};
  tfvis.render.confusionMatrix(container2, {values: confusionMatrix, tickLabels: classNames2});

  labels.dispose();
}

async function showConfusion(model, data) {
  //const [preds, labels] = doPrediction(model, data);
  //const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
  //const container = {name: 'Confusion Matrix', tab: 'Evaluation'};
  //tfvis.render.confusionMatrix(container, {values: confusionMatrix, tickLabels: classNames});

//  labels.dispose();
}
