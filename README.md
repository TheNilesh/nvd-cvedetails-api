# NVD CVE Details as JSON-REST API

[NVD vulnerability data feeds](https://nvd.nist.gov/vuln/data-feeds#JSON_FEED) are published as year-wise JSON files in gzip format. This makes fetching CVE details for particular CVE ID very difficult.

This project mirrors CVE Details into MongoDB and then provide queryable REST-API using NodeJS. This will also set background cron-job to keep local database up-to-date with NIST data feeds as suggested [here](https://nvd.nist.gov/vuln/data-feed).


    GET http://localhost:3000/cvedetails/CVE-2017-0001
    {
    	"_id": "CVE-2017-0001",
    	"cve": {
    		"data_type": "CVE",
    		"data_format": "MITRE",
    		"data_version": "4.0",
    		"CVE_data_meta": {
    			"ID": "CVE-2017-0001",
    			"ASSIGNER": "cve@mitre.org"
    		},
    		"description": {
    			"description_data": [{
    				"lang": "en",
    				"value": "The Graphics Device Interface (GDI) in Microsoft Windows Vista SP2; Windows Server 2008 SP2 and R2 SP1; Windows 7 SP1; Windows 8.1; Windows Server 2012 Gold and R2; Windows RT 8.1; and Windows 10 Gold, 1511, and 1607 allows local users to gain privileges via a crafted application, aka \"Windows GDI Elevation of Privilege Vulnerability.\" This vulnerability is different from those described in CVE-2017-0005, CVE-2017-0025, and CVE-2017-0047."
    			}]
    		}
    	},
    	"impact": {
    		"baseMetricV3": {
    			"cvssV3": {
    				"version": "3.0",
    				"vectorString": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    				"attackVector": "LOCAL",
    				"attackComplexity": "LOW",
    				"privilegesRequired": "LOW",
    				"userInteraction": "NONE",
    				"scope": "UNCHANGED",
    				"confidentialityImpact": "HIGH",
    				"integrityImpact": "HIGH",
    				"availabilityImpact": "HIGH",
    				"baseScore": 7.8,
    				"baseSeverity": "HIGH"
    			},
    			"exploitabilityScore": 1.8,
    			"impactScore": 5.9
    		},
    		"baseMetricV2": {
    			"cvssV2": {
    				"version": "2.0",
    				"vectorString": "AV:L/AC:L/Au:N/C:C/I:C/A:C",
    				"accessVector": "LOCAL",
    				"accessComplexity": "LOW",
    				"authentication": "NONE",
    				"confidentialityImpact": "COMPLETE",
    				"integrityImpact": "COMPLETE",
    				"availabilityImpact": "COMPLETE",
    				"baseScore": 7.2
    			},
    			"severity": "HIGH",
    			"exploitabilityScore": 3.9,
    			"impactScore": 10,
    			"obtainAllPrivilege": false,
    			"obtainUserPrivilege": false,
    			"obtainOtherPrivilege": false,
    			"userInteractionRequired": false
    		}
    	},
    	"publishedDate": "2017-03-17T00:59Z",
    	"lastModifiedDate": "2019-10-03T00:03Z"
    }
    
 OR other combinations like
 
     GET http://localhost:3000/cvedetails?description=*RDP*
     GET http://localhost:3000/cvedetails?impact.severity=HIGH&publishedDate=lastMonth

## Usage

    npm i
    node index.js 2020 2019 2018 2017 2016 # Start serving CVE data for specific years as JSON-REST API
