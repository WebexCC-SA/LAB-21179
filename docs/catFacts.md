It is time to bring some external data into your flow.

## Remove the Branch node which forces the MMS path  
> Click on the Branch node which forces the MMS path and press Delete  


## Update the Branch node which evaluates RCS Capability  
> Open the Branch node
> Click the AND button  
> Set the variable to point to **inboundWebhook.forceMMS** by selecting it from the Input Variables  
> Condition: Not equals  
> Value: true  
> Click Save  
>
> ---


## Add an HTTP Request node  
> Delete the connector between RCS Capability and the Branch node  
> Add an HTTP Request node to the flow canvas  
> Connect the Output of the RCS Capability node to the input of this node
> Open up the HTTP node  
>> Method: GET  
>> Endpoint URL: <copy>https://catfact.ninja/fact</copy>  
>> Header: <copy>Accept</copy>  
>> Header Value: <copy>application/json</copy>  
>> Connection Timeout: <copy>2000</copy>  
>> Connection Timeout: <copy>2000</copy>  
>
> In the Output Variables section, select JSON and click Import from Sample  
>
!!! code w50 "Copy this value into the import sample JSON box and click parse"
    ```json
    {
    "fact": "Cats dislike citrus scent.",
    "length": 26
    }
    ```
>
> Tick the checkbox next to `$.fact`
> Click Import  
> Output Variable Name: <copy>fact</copy>  
> Click Transition Actions  
> Set the Custom Variable **msgVar** to the node output variable of **fact**  
> Connect the output of this node to the input of the Branch node  
>
> ---

## Delete the RCS Message node and the MMS node which are connected to the output of the receive nodes  

# Edit the Receive node after the RCS Message node
> Click Add Another RCS Event  
> Select: **Postback Response**  
> Click Save
>
> ---

## Update the RCS Message node
> Media URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/surprised-cat-hydrocephalus-kevin-theadventuresofkev30_348966441740267.png</copy>  
> Thumbnail URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/surprised-cat-hydrocephalus-kevin-theadventuresofkev30_348966441740267.png</copy>  
> Title: <copy>Did you know</copy>  
> Description: Add <copy>Would you like another fact?</copy> in the line after the msgVar  
> Click Add Suggestion and select Simple reply
> Add <copy>Yes</copy>  to both the title and postback fields  
> Click Submit  
> Click Save  
>
> ---

## Update the MMS node
> MMS Message Subject: <copy>Did you know</copy>  
> Media URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/surprised-cat-hydrocephalus-kevin-theadventuresofkev30_348966441740267.png</copy>  
> Message: Add <copy>Would you like another fact? Reply with Yes</copy> in the line after the msgVar  
> Click Save  
>
> ---

## Add A Branch node
> Add a Branch node to the canvas  
> Connect both Receive nodes to the new Branch node  
> Evaluate the Variable of **receive.message**  
> Condition: Contains ignore case  
> Value: <copy>yes</copy>  
> Click the OR button and do the same for the other Receive node  
> Click the OR button AGAIN and Evaluate the Variable of **rcs.text** on the RCS receive node  
> Condition: Contains ignore case  
> Value: <copy>yes</copy> 
> Connect the Branch1 output to the HTTP Request node
>
> ---

## Save and publish your flow

## Time to Test
> Use the form below to send a webhook which will kick off the flow.


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