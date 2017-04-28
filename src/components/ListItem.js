import React, {Component} from 'react';
import {CardSection} from './common'
import {View,Text, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import * as actions from '../action';
import {connect} from 'react-redux';
class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    
    renderDescription(){
        const {library,expanded} = this.props;
        if( expanded){
            return (
                <CardSection>
                    <Text style={{flex:1, paddingLeft:15}}>
                        {library.description}
                    </Text>
                </CardSection>
                
            );
        }
    }
    render(){
        const {titleStyles} = styles;
        const {id, title} = this.props.library
        return (
            <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyles}>
                            {title}
                        </Text>
                    </CardSection> 
                    {this.renderDescription()}
                </View>
                
            </TouchableWithoutFeedback>
            
        );
    }
}
const styles = {
    titleStyles:{
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem); 