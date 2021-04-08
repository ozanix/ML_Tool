/**
----This is modified version of the original code licensed as below---
----Modifications made by Erol Ozan-----------------------------------
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
 //selected_size = parseInt(document.getElementById("selected_size").value);
 number_of_images = parseInt(document.getElementById("myText").value);

 number_of_classes = parseInt(document.getElementById("number_of_classes").value);

 selected_size = parseInt(document.getElementById("selected_size").value);

 file_name = document.getElementById("file_name").value;

 file_extension = document.getElementById("file_extension").value;

 number_of_training_images = parseInt(document.getElementById("number_of_training_images").value);

 number_of_test_images = parseInt(document.getElementById("number_of_test_images").value);

 epochs_value = parseInt(document.getElementById("epochs_value").value);

var IMAGE_SIZE = selected_size*selected_size;




var NUM_TEST_ELEMENTS = number_of_test_images;
//const NUM_TEST_ELEMENTS = 270;

//const MNIST_IMAGES_SPRITE_PATH =
//    'training_imgs.png';
//    'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';

/**
 * A class that fetches the sprited MNIST dataset and returns shuffled batches.
 *
 * NOTE: This will get much easier. For now, we do data fetching and
 * manipulation manually.
 */


export class MnistData {
  constructor() {
    this.shuffledTrainIndex = 0;
    this.shuffledTestIndex = 0;
  }

  async load() {
    // Make a request for the MNIST sprited image.
  //  const img = new Image();
    var final_image_array = [0,1,0];//
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgRequest = new Promise((resolve, reject) => {
    //  img.crossOrigin = '';
    //  img.onload = () => {
    //    img.width = img.naturalWidth;
    //    img.height = img.naturalHeight;

        const datasetBytesBuffer =
            new ArrayBuffer(number_of_images * IMAGE_SIZE * 4);

        const chunkSize = number_of_images;
        canvas.width = selected_size;
        canvas.height = chunkSize*selected_size;

        for (let i = 0; i < 1; i++) {
          const datasetBytesView = new Float32Array(
              datasetBytesBuffer, i * IMAGE_SIZE * chunkSize * 4,
              IMAGE_SIZE * chunkSize);
      //    ctx.drawImage(img,0,0);

        //  const imageData = ctx.getImageData(0, 0, 56, 56*400);
var imageDataX = image_array;
console.log("imageDataX");
console.log(imageDataX);
          for (let j = 0; j < imageDataX.length / 4; j++) {
            // All channels hold an equal value since the image is grayscale, so
            // just read the red channel.
            //datasetBytesView[j] = imageData.data[j * 4] / 255;
              datasetBytesView[j] = ((parseInt(imageDataX[j * 4]) + parseInt(imageDataX[j * 4 +1])+ parseInt(imageDataX[j * 4 +2]) )/3)/ 255;
//console.log(j, ",", datasetBytesView[j]);
          }
          final_image_array=datasetBytesView;

        }
        console.log("image data set loading started");
        this.datasetImages = new Float32Array(final_image_array);

console.log("loading is succesful");
        resolve();
    });

    const [imgResponse, labelsResponse] =
        await Promise.all([imgRequest]);


                var dataLabels = [0,1];
                var k = 0;
                var ratio = parseInt(number_of_images/number_of_classes);

                var i=0;
                for (i = 0; i < (ratio); i++) {

                      k=number_of_classes * i;
                      dataLabels[k] = 1;
                      dataLabels[k +1] = 0;
                      if (number_of_classes>2){dataLabels[k +2] = 0;}
                      if (number_of_classes>3){dataLabels[k +3] = 0;}
                      if (number_of_classes>4){dataLabels[k +4] = 0;}
                      if (number_of_classes>5){dataLabels[k +5] = 0;}
                      if (number_of_classes>6){dataLabels[k +6] = 0;}
                      if (number_of_classes>7){dataLabels[k +7] = 0;}
                      if (number_of_classes>8){dataLabels[k +8] = 0;}
                      if (number_of_classes>9){dataLabels[k +9] = 0;}


                }
        for (i = ratio; i < (2*(ratio)); i++) {
                  k=number_of_classes* i;
                  dataLabels[k] = 0;
                  dataLabels[k +1] = 1;
                  if (number_of_classes>2){dataLabels[k +2] = 0;}
                  if (number_of_classes>3){dataLabels[k +3] = 0;}
                  if (number_of_classes>4){dataLabels[k +4] = 0;}
                  if (number_of_classes>5){dataLabels[k +5] = 0;}
                  if (number_of_classes>6){dataLabels[k +6] = 0;}
                  if (number_of_classes>7){dataLabels[k +7] = 0;}
                  if (number_of_classes>8){dataLabels[k +8] = 0;}
                  if (number_of_classes>9){dataLabels[k +9] = 0;}


                }
if (number_of_classes>2){
                for (i = (2*(ratio)); i < (3*(ratio)); i++) {
                          k=number_of_classes* i;
                          dataLabels[k] = 0;
                          dataLabels[k +1] = 0;
                          if (number_of_classes>2){dataLabels[k +2] = 1;}
                          if (number_of_classes>3){dataLabels[k +3] = 0;}
                          if (number_of_classes>4){dataLabels[k +4] = 0;}
                          if (number_of_classes>5){dataLabels[k +5] = 0;}
                          if (number_of_classes>6){dataLabels[k +6] = 0;}
                          if (number_of_classes>7){dataLabels[k +7] = 0;}
                          if (number_of_classes>8){dataLabels[k +8] = 0;}
                          if (number_of_classes>9){dataLabels[k +9] = 0;}


                        }
                      }
if (number_of_classes>3){
                        for (i = (3*(ratio)); i < (4*(ratio)); i++) {
                                  k=number_of_classes* i;
                                  dataLabels[k] = 0;
                                  dataLabels[k +1] = 0;
                                  if (number_of_classes>2){dataLabels[k +2] = 0;}
                                  if (number_of_classes>3){dataLabels[k +3] = 1;}
                                  if (number_of_classes>4){dataLabels[k +4] = 0;}
                                  if (number_of_classes>5){dataLabels[k +5] = 0;}
                                  if (number_of_classes>6){dataLabels[k +6] = 0;}
                                  if (number_of_classes>7){dataLabels[k +7] = 0;}
                                  if (number_of_classes>8){dataLabels[k +8] = 0;}
                                  if (number_of_classes>9){dataLabels[k +9] = 0;}

                                }
                              }

if (number_of_classes>4){

                                for (i = (4*(ratio)); i < (5*(ratio)); i++) {
                                          k=number_of_classes* i;
                                          dataLabels[k] = 0;
                                          dataLabels[k +1] = 0;
                                          if (number_of_classes>2){dataLabels[k +2] = 0;}
                                          if (number_of_classes>3){dataLabels[k +3] = 0;}
                                          if (number_of_classes>4){dataLabels[k +4] = 1;}
                                          if (number_of_classes>5){dataLabels[k +5] = 0;}
                                          if (number_of_classes>6){dataLabels[k +6] = 0;}
                                          if (number_of_classes>7){dataLabels[k +7] = 0;}
                                          if (number_of_classes>8){dataLabels[k +8] = 0;}
                                          if (number_of_classes>9){dataLabels[k +9] = 0;}

                                        }
                                      }

if (number_of_classes>5){
                                       for (i = (5*(ratio)); i < (6*(ratio)); i++) {
                                                  k=number_of_classes* i;
                                                  dataLabels[k] = 0;
                                                  dataLabels[k +1] = 0;
                                                  if (number_of_classes>2){dataLabels[k +2] = 0;}
                                                  if (number_of_classes>3){dataLabels[k +3] = 0;}
                                                  if (number_of_classes>4){dataLabels[k +4] = 0;}
                                                  if (number_of_classes>5){dataLabels[k +5] = 1;}
                                                  if (number_of_classes>6){dataLabels[k +6] = 0;}
                                                  if (number_of_classes>7){dataLabels[k +7] = 0;}
                                                  if (number_of_classes>8){dataLabels[k +8] = 0;}
                                                  if (number_of_classes>9){dataLabels[k +9] = 0;}


                                                }

                                              }
if (number_of_classes>6){

                                                for (i = (6*(ratio)); i < (7*(ratio)); i++) {
                                                          k=number_of_classes* i;
                                                          dataLabels[k] = 0;
                                                          dataLabels[k +1] = 0;
                                                          if (number_of_classes>2){dataLabels[k +2] = 0;}
                                                          if (number_of_classes>3){dataLabels[k +3] = 0;}
                                                          if (number_of_classes>4){dataLabels[k +4] = 0;}
                                                          if (number_of_classes>5){dataLabels[k +5] = 0;}
                                                          if (number_of_classes>6){dataLabels[k +6] = 1;}
                                                          if (number_of_classes>7){dataLabels[k +7] = 0;}
                                                          if (number_of_classes>8){dataLabels[k +8] = 0;}
                                                          if (number_of_classes>9){dataLabels[k +9] = 0;}

                                                        }
                                                      }

if (number_of_classes>7){

                                                        for (i = (7*(ratio)); i < (8*(ratio)); i++) {
                                                                  k=number_of_classes* i;
                                                                  dataLabels[k] = 0;
                                                                  dataLabels[k +1] = 0;
                                                                  if (number_of_classes>2){dataLabels[k +2] = 0;}
                                                                  if (number_of_classes>3){dataLabels[k +3] = 0;}
                                                                  if (number_of_classes>4){dataLabels[k +4] = 0;}
                                                                  if (number_of_classes>5){dataLabels[k +5] = 0;}
                                                                  if (number_of_classes>6){dataLabels[k +6] = 0;}
                                                                  if (number_of_classes>7){dataLabels[k +7] = 1;}
                                                                  if (number_of_classes>8){dataLabels[k +8] = 0;}
                                                                  if (number_of_classes>9){dataLabels[k +9] = 0;}
}
                                                                }


if (number_of_classes>8){
                                                                for (i = (8*(ratio)); i < (9*(ratio)); i++) {
                                                                          k=number_of_classes* i;
                                                                          dataLabels[k] = 0;
                                                                          dataLabels[k +1] = 0;
                                                                          if (number_of_classes>2){dataLabels[k +2] = 0;}
                                                                          if (number_of_classes>3){dataLabels[k +3] = 0;}
                                                                          if (number_of_classes>4){dataLabels[k +4] = 0;}
                                                                          if (number_of_classes>5){dataLabels[k +5] = 0;}
                                                                          if (number_of_classes>6){dataLabels[k +6] = 0;}
                                                                          if (number_of_classes>7){dataLabels[k +7] = 0;}
                                                                          if (number_of_classes>8){dataLabels[k +8] = 1;}
                                                                          if (number_of_classes>9){dataLabels[k +9] = 0;}

                                                                        }
                                                                        }

if (number_of_classes>9){

                                                                        for (i = (9*(ratio)); i < (10*(ratio)); i++) {
                                                                                  k=number_of_classes* i;
                                                                                  dataLabels[k] = 0;
                                                                                  dataLabels[k +1] = 0;
                                                                                  if (number_of_classes>2){dataLabels[k +2] = 0;}
                                                                                  if (number_of_classes>3){dataLabels[k +3] = 0;}
                                                                                  if (number_of_classes>4){dataLabels[k +4] = 0;}
                                                                                  if (number_of_classes>5){dataLabels[k +5] = 0;}
                                                                                  if (number_of_classes>6){dataLabels[k +6] = 0;}
                                                                                  if (number_of_classes>7){dataLabels[k +7] = 0;}
                                                                                  if (number_of_classes>8){dataLabels[k +8] = 0;}
                                                                                  if (number_of_classes>9){dataLabels[k +9] = 1;}

                                                                                }
                                                                              }


console.log("**********************");
              console.log("dataLabels");
        console.log(dataLabels);
        console.log("**********************");
                this.datasetLabels  = new Uint8Array(dataLabels);




    console.log("this.datasetLabels", this.datasetLabels);

    // Create shuffled indices into the train/test set for when we select a
    // random dataset element for training / validation.
    this.trainIndices = tf.util.createShuffledIndices(number_of_training_images);
    console.log("this.trainIndices");
    console.log(this.trainIndices);
    this.testIndices = tf.util.createShuffledIndices(number_of_test_images);//attention

    // Slice the the images and labels into train and test sets.
    this.trainImages =
        this.datasetImages.slice(0, IMAGE_SIZE * number_of_training_images);
    this.testImages = this.datasetImages.slice(IMAGE_SIZE * number_of_test_images);
    this.trainLabels =
        this.datasetLabels.slice(0, number_of_classes * number_of_training_images);
        console.log("this.trainLabels");
        console.log(this.trainLabels);
    this.testLabels =
        this.datasetLabels.slice(number_of_classes * number_of_test_images);
        console.log("this.testLabels");
        console.log(this.testLabels);

  }

  nextTrainBatch(batchSize) {
    return this.nextBatch(
        batchSize, [this.trainImages, this.trainLabels], () => {
          this.shuffledTrainIndex =
              (this.shuffledTrainIndex + 1) % this.trainIndices.length;
          return this.trainIndices[this.shuffledTrainIndex];
        });
  }

  nextTestBatch(batchSize) {
    return this.nextBatch(
      batchSize, [this.testImages, this.testLabels], () => {
      this.shuffledTestIndex =
          (this.shuffledTestIndex + 1) % this.testIndices.length;
      return this.testIndices[this.shuffledTestIndex];
    });
  }

  nextBatch(batchSize, data, index) {
    const batchImagesArray = new Float32Array(batchSize * IMAGE_SIZE);
    const batchLabelsArray = new Uint8Array(batchSize * number_of_classes);

    for (let i = 0; i < batchSize; i++) {
      const idx = index();

      const image =
          data[0].slice(idx * IMAGE_SIZE, idx * IMAGE_SIZE + IMAGE_SIZE);
      batchImagesArray.set(image, i * IMAGE_SIZE);

      const label =
          data[1].slice(idx * number_of_classes, idx * number_of_classes + number_of_classes);
      batchLabelsArray.set(label, i * number_of_classes);
    }

    const xs = tf.tensor2d(batchImagesArray, [batchSize, IMAGE_SIZE]);
    const labels = tf.tensor2d(batchLabelsArray, [batchSize, number_of_classes]);

    return {xs, labels};
  }
}
