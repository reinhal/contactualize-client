import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/InteractionForm.css';

/**
 * Stop trying to make `fetch` happen, W3C; it's not going to happen.
 * @param {String} path 
 * @param {Object} [fetchOpts={ method: 'get' }] 
 * @param {Object} [params=null]
 */
function soFetch(path, fetchOpts = { method: 'get' }, params = null) {
  let url = new URL(path);
  if (params !== null) Object.values(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return fetch(url, fetchOpts)
    .then((res) => res.json())
    .catch((ex) => console.error('Not so fetch :(', ex));
}

export default class InteractionForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);
    this.createInteraction = this.createInteraction.bind(this);

    this.state = {
      title: '',
      text: ''
    }
  }

  componentDidMount() {
    console.log(this.props.params);
    if (this.props.params !== undefined) {
      soFetch(`${API_BASE_URL}/interactions/${this.props.params.id}`)
        .then(data => this.setState({ title: data.title, text: data.text}));
    }
  }

  createInteraction(interactionData) {
    console.log(interactionData);
    let interactionUrl = `${API_BASE_URL}/interactions`;
    if (this.reqMethod === 'PUT' && this.props.params.id) {
      interactionUrl += '/' + this.props.params.id;
    }

    const opts = {
      method: this.reqMethod, 
      body: JSON.stringify(interactionData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };

    return soFetch(`${interactionUrl}`, opts)
      .then(data => console.log(data))
      .then(() =>  this.props.history.push('/home'))
      .catch(err => console.error('oops!', err));
  }
  
  onSubmit(e) {
    e.preventDefault();
    const interactionData = {
      title: e.currentTarget.title.value,
      text: e.currentTarget.text.value
    };
    this.createInteraction(interactionData);
  }

  onInputChange(e) {
    this.setState({
      [e.target.title]: e.target.value,
      [e.target.notes]: e.target.value
    });
  }

  handleInteraction(e) {
    this.setState({
      title: this.state.title,
      text: this.state.text
    });
  }

  render(props) {
    const defaultValues = this.state;
    return (
      <form id="create-interaction" onSubmit={e => this.onSubmit(e)}>
        <fieldset className="interaction-form">
          <legend>
          {this.reqMethod === 'POST'
            ? 'Add Interaction'
            : 'Update Interaction'}
          </legend>
          <div>
            <label htmlFor="title">Title*</label>
            <input 
              id="title" 
              className="newTitle" 
              type="text" 
              name="title" 
              defaultValue={defaultValues ? defaultValues.title: ''}
              onChange={this.onInputChange}
            required />
          </div>
          <div>
            <label htmlFor="text">Text*</label>
            <textarea id="text" name="text" rows="10" defaultValue={defaultValues ? defaultValues.text: ''}></textarea>
          </div>
          {/* add a dropdown menu here for all current contacts, 
          display their name but add their ID as part of the interactions props */}
        </fieldset>
        <div className="button-div">
          <button className="interaction-button" type="submit" onClick={this.handleInteraction}>{this.reqMethod === 'POST' ? 'Create' : 'Update'} </button>
        </div>
      </form>
    );
  }
}

InteractionForm.defaultProps = {
  interactionLegend: "Record a New Interaction",
  interactionButton: "Create", 
  type: 'POST'
}