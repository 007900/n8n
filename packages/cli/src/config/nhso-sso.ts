export const nhso_sso_config = {
	"url": "https://accounts.egov.go.th/server.aspx",
	"params": {
		"openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
		"openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
		"openid.return_to": "",
		"dnoa.userSuppliedIdentifier": "https://accounts.egov.go.th /",
		"openid.realm": "",
		"openid.mode": "checkid_setup",
		"openid.ns": "http://specs.openid.net/auth/2.0",
		"openid.ns.alias3": "http://openid.net/srv/ax/1.0",
		"openid.alias3.required": "alias1,alias2,alias3,alias4,alias5",
		"openid.alias3.mode": "fetch_request",
		"openid.alias3.type.alias1": "http://axschema.org/contact/email",
		"openid.alias3.count.alias1": "1",
		"openid.alias3.type.alias2": "http://axschema.org/namePerson",
		"openid.alias3.count.alias2": "1",
		"openid.alias3.type.alias3": "http://axschema.org/namePerson/friendly",
		"openid.alias3.count.alias3": "1",
		"openid.alias3.type.alias4": "http://www.egov.go.th/2012/identifier/citizenid",
		"openid.alias3.count.alias4": "1",
		"openid.alias3.type.alias5": "http://www.egov.go.th/2012/identifier/usertype",
		"penid.alias3.count.alias5": "1"
	}
}
