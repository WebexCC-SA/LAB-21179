
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




ForceMMS: true

https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/sadKitty_239352025917078.jpg