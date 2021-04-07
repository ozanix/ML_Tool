# ML_Tool Overview of the Project
Here you will find a set of tools that you can use to develop your own image classification machine learning models. The tool can be run on a browser (Chrome is recommended). It does not require any programming skills. The purpose of this project is to provide an AI application development tool for researchers or practitioners who do not have programming skills or do not have time to delve into the technical details of the most of the ML development platforms.
This tool has three main elements:
1. Image Set Preperation Tool: A tool that combines the images that you will use to train the model. It creates a single file that combines all the images you selected.
2. ML Model Training Tool: A tool to generate an ML model. You enter the output of tool#1 above and adjust the other parameters. This tool outputs an ML model.
3. Tool to run ML Models: A tool to run your ML model. This tool allows you to run your ML model and get a model prediction as the output.

The three tools (1,2,3) outlined above can be used independently. If you are starting from scratch, you must use the tools in the order they are presented above (1,2,3). Below the workflow is explained.

# Step 1 Prepare your training images
The workflow is typically start with preparing your images to feed them to the ML training module. Since you will be using a large number of image files, it is beneficial to combine all images within a single file. The tool provided in this project facilitates this process. It allows you to select individual folders that contain your image files.
First you must decide how many classes you will have in your project. For example, if you want to create a model that classifies images into cat and dog images, you will have two classes. In that case, create two seperate folders titled as "cats" and "dogs" (or any name you like). Each folder has to have equal number of image files. In other words, you have to provide equal number of each classes. 
Once you have your iamges and folders are reaady you can move to the next step below.

# Step 2 Combine images
Run "combine_images_start_html", Make sure you run a local server on your machine and run the tools locally. Chrome provides a free server add-on for Chrome that is easy to use. It is located at https://chrome.google.com/webstore/detail/web-server-for-chrome/ You can also use any other local server you like.
The page "Combine_images_start.html" provides an entry point to the tool set. Using the tool select the first folder that contains the images of the first class (e.g. the folder "dogs"). After the selection, you must click on the button that loads those images. Verify if the images are shown in the browser. Next, you will continue with the second class. Select the folder that contains the images that represen the second class (e.g. the folder "cats"). If you have more then 2 classes, continue with the next class repeating the same steps.
Once you finish loading all the folders, verify that all the images are now visible in the browser. Verify if they are ordered correctly. If everything looks good, provide a name for the output file. Next, click on the button that says "Combine Images". The tool will work on the process and after a period of time, you will notice that it downloads a file to your computer. That file contains the content of your images stored as series of numbers. That file is located in the Downloads folder of your computer.
If everything goes well up to this point, next click on the button that says "try your model!".

# Step 3 Train the model
Here, enter the parameters for your project one more time and then click the button that says "next steps". In the next screen, you provide the names for your classes (e.g. "dogs,cats"). Next select the output file that was created at the end of Step2. Make sure you load that file clicking on "load selected file". After that, you will provide values for batch size and epochs. There is no set rule for how to come up with those numbers. Usually, t is a trial and error process. Each project is different and it is a good idea to play with different numbers and see how they work. Next, provide a name for the model. Here, it i very important to provide a different name for each trial. Because the tool creates two files and it uses the same name a starting point to name those two files. If you use the same name twice you will end up having problems. Just a warning. 




