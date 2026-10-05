
In this exercise you will be fortifying your flow to make testing the MMS functionality possible even if you have an RCS enabled device.

## Edit the Webhook Payload
> in the upper right corner of he flow builder, click edit  
> Double click the Configure Webhook node  
> In the **PROVIDE SAMPLE INPUT** area update the JSON to the following:
!!! code w50 "&nbsp;"
    ```json
    {
    "phone": "15615551212",
    "imageURL": "http://mywebsite.com/image.jpg",
    "msg": "Here is my message to be delivered",
    "forceMMS": true
    }
    ```
> Press the **Parse** button (you may need to scroll down in the window depending on your screen resolution)  
> Press Save
>
> ---

## Add a new Branch node to the canvas
> Select the connector between Configure Webhook and the RCS Capability nodes and press the delete button  
> Drag a Branch node onto the canvas  
> Connect the green onSuccess output node edge of the Configure Webhook node to the input node edge of the new Branch node  
> Double click the new node to configure it 
> Click in the **Variable** text box  
> In the Input Variables section of the left pane, click the RCS Capability node to expand the variables list  
> Click the variable **inboundWebhook.forceMMS** to populate the variable path  
> In the Condition dropdown, select: Equals  
> In the Value textbox enter the text: <copy>true</copy>  
> Click Save  
> ---

## Connect the new Branch node
> Connect the green output node edge from the Branch node to the MMS node and select **Branch1** when prompted  
> Connect the green output node edge from the Branch node to the RCS Capability node (None of the above should be automatically applied)  
> Save and Publish the flow  
> ---

## Time to Test
> Enter your Mobile number and a test message into the appropriate boxes, then select Force MMS to true.  
>> You should receive an MMS message even if your device is RCS enabled.  
>
> Now switch the the Force MMs dropdown to false and test again.  
>> Your results should be the same as the previous exercise. 


<form id="testing" onsubmit="sendTest(event)">
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required><br>

    <label for="message">Message:</label>
    <input type="text" id="message" name="message" required><br>

    <label for="forceMMS">Force MMS:</label>
    <select id="forceMMS" name="forceMMS" onChange="setItem(this.id,this.value)">
    <option value = false>false</option>
    <option value = true>true</option>
    
    </select><br>
    <!-- <input type="select" id="forceMMS" name="forceMMS" required><br> -->


    <button type="submit">Send Test</button>
    <output role="status" aria-live="polite"></output>
    </form>

