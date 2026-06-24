import { NextResponse } from 'next/server';
import { getLeads, saveLeads } from '@/lib/franchise';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const leads = getLeads();
    const lead = leads.find(l => l.id === id);
    
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }
    
    return NextResponse.json(lead);
  } catch (error: any) {
    console.error('Error fetching lead details:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const leads = getLeads();
    
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    if (body.status) {
      const validStatuses = ['New', 'Under Review', 'Approved', 'Rejected', 'On Hold'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
      }
      leads[index].status = body.status;
    }

    if (body.internalNotes !== undefined) {
      leads[index].internalNotes = body.internalNotes;
    }

    const success = saveLeads(leads);
    if (!success) {
      return NextResponse.json({ error: 'Failed to update database record' }, { status: 500 });
    }

    return NextResponse.json(leads[index]);
  } catch (error: any) {
    console.error('Error updating lead details:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
