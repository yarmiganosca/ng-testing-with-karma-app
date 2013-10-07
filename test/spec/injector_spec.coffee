describe "the angular injector", ->
  beforeEach module 'qrngApi'
  it "should do things on $provide", inject ($injector) ->
    expect($injector).toBeDefined()
    expect($injector.get('$httpBackend').expect).toBeDefined()
