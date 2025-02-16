// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// render
frappe.listview_settings['E Invoice'] = {
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {
		var status_color = {
			"EFRIS Pending": "yellow",
			"EFRIS Generated": "green",
			"EFRIS Credit Note Pending": "orange",
			"EFRIS Cancelled": "red",
			"Cancelled": "red"
		};
		return [__(doc.status), status_color[doc.status], "status,=,"+doc.status];
	}
};
