Hi, Welcome! 

If you want heart animation feel free to use this code. Its just HTML and CSS.

1. Basics (How does it work ?) 
1.1. Download everything in this folder.
1.1. I have used 6 boxes and using css designed them to look like a heart
1.2. When you will hover each shape it will get highlighted, however when you click a shape it will turn into a box and will display the picture (Refer point 2 to know how to insert your picture)

2. How to Insert Picture ? 
2.1. Simply rename the your photos to d1,d2,d3,d4,d5 and d6 and place it in the same folder as the css and html files.
2.2. Which shape displays which picture ?  
2.2.1. The left most semi circular shape is d1 (This means the picture you renamed to d1 will be displayed in this shape)
2.2.2. The tilted square next to it is d2
2.2.3. The right most semi circulare shape is d3
2.2.4. The left most square is d4 (adjecent to d1)
2.2.5. The bottom most square is d5 
2.2.6. The right most square is d6 (adjecent to d3)

3. Troubleshooting incase picture is not displayed.

3.1. This might occur due to different image file type. Images may have a different file format that is .jpeg,.jpg,.png being some of the most common ones used.
3.2. Currently my css has been defaulted to '.png' extension for all images. You just need to open the css files update it to your image file type. (Right click on the image and click properties to find your image file type)
3.3. Open the heartAnimation.css file and for: 
	-  d1 -> go to line 100 and update the .png to your respective extension
	example: if your file has .jpeg extension update  
	background-image: url(d1.png); to  background-image: url(d1.jpeg);
	- d2 ->  go to line 105 and update
	- d3 ->  go to line 110 and update
	- d4 ->  go to line 115 and update
	- d5 ->  go to line 123 and update
	- d6 ->  go to line 129 and update
  
