import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Icon } from 'semantic-ui-react'
const CadUserForm = props =>  (


    <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
  
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color='blue' textAlign='center'>
         Fatec Social
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input id= 'email' fluid icon='user' iconPosition='left' placeholder='Email' value={props.email} onChange={props.handleChanged} />
            {props.errors.Email && <Message negative>
    <p>{props.errors.Email}</p>
  </Message>}
  <Form.Input id= 'email-confirm' fluid icon='user' iconPosition='left' placeholder='Confirme email' value={props.email2} onChange={props.handleChanged} />
            {props.errors.Email && <Message negative>
    <p>{props.errors.Email}</p>
  </Message>}

            <Form.Input id='pass'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Senha'
              type='password' value={props.pass} onChange={props.handleChanged}
            />
                    {props.errors.Senha && <Message negative>
    <p>{props.errors.Senha}</p>
  </Message>}
  <Form.Input id='pass-confirm'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirmação da senha'
              type='password' value={props.pass} onChange={props.handleChanged}
            />
                    {props.errors.Senha && <Message negative>
    <p>{props.errors.Senha}</p>
  </Message>}

            <Button primary color='teal' fluid size='large' onClick={props.login}>
             Entrar
            
            </Button>
          </Segment>
        </Form>
        
        
      </Grid.Column>
    </Grid>
  </div>
)
export default CadUserForm