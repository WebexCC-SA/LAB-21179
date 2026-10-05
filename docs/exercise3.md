In this exercise you will use custom variables and handle message responses.  


## Make the Message a variable
> Open the Configure Webhook node  
> Click **Transitions Actions** (just under the modal title)  
> Click Add Action  
> > Time: On-leave  
> > Action: Set variable  
> > In the Variable dropdown, select **ADD NEW VARIABLE**  
>>> Variable Name: <copy>msgVar</copy>  
>>> Leave the Default Value blank and click Save
>>  
>> In the Value textbox, select the node Output Variable **inboundWebhook.msg**
>
> Click Save  
> 
> ---

## Update the RCS Message node to use the new Custom Variable  
> Open the RCS Message node  
> Delete the value in the Description box  
> Click Custom Variables in the Input Variables pane  
> Click to add **msgVar** to the Description box (after adding, add and then delete a space after the variable to force the variable to properly save)  
> Update the Media URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/parrot_339447615067747.jpg</copy>  
> Update the Media URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/parrot_339447615067747.jpg</copy>  
> Click Save  
> 
> ---

## Update the RCS Message node to use the new Custom Variable  
> Open the MMS node  
> Delete the value in the MMS Message Subject box (you will leave it empty)  
> Delete the value in the Message box
> Click Custom Variables in the Input Variables pane  
> Click to add **msgVar** to the Message box (after adding, add and then delete a space after the variable to force the variable to properly save)  
> Update the Media URL: <copy>https://qaemailmedia.s3.amazonaws.com/2dfadf61-9978-47dd-8a54-766f69c7e6d6/parrot_339447615067747.jpg</copy>  
> Click Save  
>
> ---

## Add a Receive node after the RCS Message node  
> Add a Receive node to the flow canvas positioned after the RCS message node  
> Connect the green onSuccess node edge of the RCS node to the new Receive node  
> Open the node and select Receive RCS message/event  
> Max Timeout: <copy>120</copy>  
> From: Input the variable for **inboundWebhook.phone**  
> Event Name: Incoming Message  
> Click Transition Actions at the top of the node modal  
> > Click Add Action  
> > Time: On-leave  
> > Action: Set variable  
> > Variable: msgVar  
> > Value: use the Output Variable **receive.message**  
>
> Click Save  
> Copy the RCS Message node by selecting it, using ctrl + C followed by ctrl + V  
> Connect the green output node edge of the receive node to the newly copied RCS Message node  
>
> ---


## Add a Receive node after the MMS node  
> Add a Receive node to the flow canvas positioned after the MMS  node  
> Connect the green onSuccess node edge of the MMS node to the new Receive node  
> Open the node and select Receive MMS message  
> Max Timeout: <copy>120</copy>  
> Number: Number: +16693323847  
> From Number: Input the variable for **inboundWebhook.phone**  
> Event Name: Incoming Message  
> Click Transition Actions at the top of the node modal  
> > Click Add Action  
> > Time: On-leave  
> > Action: Set variable  
> > Variable: msgVar  
> > Value: use the Output Variable **receive.message**  
>
> Click Save  
> Copy the MMS node by selecting it, using ctrl + C followed by ctrl + V  
> Connect the green output node edge of the receive node to the newly copied MMS node  
>
> ---

## Save and Publish your flow
> When you are prompted for the MMS application, select +16693323847  
>
> ---

## Time to Test  
> Use the form below to send a webhook which will kick off the flow.  
When you receive the initial message respond to it from your device.  
You should have the response "parroted" back to you.



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
