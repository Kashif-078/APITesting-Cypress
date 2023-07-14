describe('API Testing in Cypress', () => 
{
    context('HTTP Methods', ()=>
    {
        // Get Request
        it('Get Request', ()=>
        {
            cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
            .its('status')
            .should('eq', 200)

            cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('body')
            .then(json => 
            {
                console.log(json);
            })

            // Alternative way
            // cy.request('https://jsonplaceholder.typicode.com/todos/1')
            // .then(response => 
            // {
                // expect(response.status).to.eq(200)
                // expect(response.body).to.not.be.null
                // console.log(response.body)
            // })
        })

        // Post Request
        it('Post Request', ()=>
        {
            cy.request
            ({
                method : 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: 
                {
                    id: 101,
                    title: "This is the title",
                    body: 'This is body',
                    userId: 1
                }
            }).its('status')
            .should('eq', 201)
        })

        // Put Request
        it('Put Request', ()=>
        {
            cy.request
            ({
                method : 'PUT',
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                body: 
                {
                    id: 1,
                    title: "This is the title of POST 1",
                    body: 'This is body of POST 1',
                    userId: 1
                }
            }).then(response => 
            {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                console.log(response.body)
            })
        })

        // Delete Request
        it('Delete Request', ()=>
        {
            cy.request
            ({
                method : 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/2',
            }).then(response => 
            {
                expect(response.status).to.eq(200)
                console.log(response.body)
            })
        })
    })
})