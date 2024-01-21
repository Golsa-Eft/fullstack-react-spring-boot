
import fetch from 'unfetch';


export const getAllStudents = () => {
    return fetch("api/v1/students")
        .then(function(response) {                       // first then()
            if(response.ok)
            {
                return response;
            }

            throw new Error('Something went wrong.');
        })
        .then(function(text) {                          // second then()
            console.log('Request successful', text);
            return text;
        })
        .catch(function(error) {                        // catch
            console.log('Request failed', error);
        });
}